import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Product from "../admin/product"
import { Col, Form, Container, Row, Button, Carousel, Image, Badge } from "react-bootstrap";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const ProductDetail = () => {
  let params = useParams();
  let [productDetail, setProductDetail] = useState();
  let [loading, setLoading] = useState(true)
  const getProductDetail = useCallback(async () => {
    try {
      let detail = await Product.productSvc.getProductBySlug(params.slug)
      if (detail.status) {
        setProductDetail(detail.result)
      }
    } catch (exception) {
      //
    }
    finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    getProductDetail()
  })
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col sm={12}>
            {
              loading ?
                <>Loading...</> :
                (
                  productDetail ?
                    <>
                      <Row>
                        <Col sm={12} md={6}>
                          <Carousel>
                            {
                              productDetail.images.map((item, ind) => (
                                <Carousel.Item key={ind}>
                                  <Image className="img img-fluid" src={process.env.REACT_APP_ASSETS_URL + "/uploads/product/" + item} />

                                  <Carousel.Caption>

                                  </Carousel.Caption>
                                </Carousel.Item>
                              ))
                            }
                          </Carousel>

                        </Col>

                        <Col sm={12} md={6}>
                          <h2>{productDetail.name}</h2>
                          <hr />
                          {
                            productDetail.categories.map((item, i) => (
                              <NavLink className="m-2" to={"/category/" + item.slug} key={i}>
                                <Badge bg={"warning"} >
                                  {
                                    item.name
                                  }
                                </Badge>
                              </NavLink>
                            ))
                          }
                          <hr />
                          <Row>
                            <Col sm={3}><h5>Brand:</h5></Col>
                            <Col sm={9}>
                              <NavLink to={"/brand/" + productDetail.brand.slug}>
                                {
                                  productDetail.brand.title
                                }
                              </NavLink>
                            </Col>
                          </Row>
                          <hr />
                          {
                            productDetail.attributes.map((item, i) => (
                              <Row key={i}>
                                <Col sm={3}>{item.name}</Col>
                                <Col sm={9}>{item.value}</Col>
                              </Row>
                            ))
                          }

                          <hr />
                          <Row>
                            <Col sm={3}>
                              <h5>Prices:</h5>
                            </Col>
                            <Col sm={9}>
                              <span className="me-3">NPR.{productDetail.afterDiscount}</span>
                              {
                                productDetail.discount ? <del className="text-danger">NPR. {productDetail.price}</del> : ''
                              }
                            </Col>
                          </Row>
                          <hr />
                          <Row>
                            <Col sm={6}>
                              <Form.Control
                                type="number"
                                name={"qty"}
                                size="sm"
                                min={0}
                                required
                              />
                            </Col>
                            <Col sm={6}>
                              <Button type="button" variant="warning" size="sm">Add to Cart</Button>
                            </Col>
                          </Row>
                          <hr />
                          <Row className="py-3">
                            <Col sm={12} dangerouslySetInnerHTML={{ __html: productDetail.description }}>

                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </>
                    : <p className="text-danger">Product does not exists</p>
                )
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default ProductDetail;