import { Carousel, Container, Row, Col } from "react-bootstrap"
import CategoryListComponent from "../../pages/fe/components/category-fe.component"

export const SliderComponent = ({ data, title = null, showCaption = false }) => {
    // props: {data: [{}], title: ""}
    return (<>
        <Container>
            <Row>
                <CategoryListComponent/>
                <Col lg={10}>
                    <Carousel controls={false}>
                        {
                            data && data.map((item, index) => (
                                <Carousel.Item interval={2000} key={index} >
                                    <img
                                        className="d-block w-100"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    {
                                        showCaption ? <>
                                            <Carousel.Caption>
                                                <h3>{item.title}</h3>
                                                <p>{item?.slogan}</p>
                                            </Carousel.Caption>
                                        </> : <></>
                                    }
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>

    </>)
}