import { Col, Container, Row , Card} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const FlashSale=()=>{
    return(
        <>
        <Container className="py-5">
            <Row className="align-items-center">
                <Col sm={12} md={6} lg={2}>
                    <p className="primary-color">On Sale Now</p>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <p>Ending  <span className="primary-bg p-2 mx-2 text-white">00 : </span> <span className="primary-bg p-2 mx-2 text-white">28 :</span> <span className="primary-bg p-2 mx-2 text-white">00</span></p>
                </Col>
                <Col sm={12} md={6} lg={4}><h1 className="primary-color text-uppercase">FLASH SALE</h1></Col>
                <Col sm={12} md={6} lg={3}><NavLink to={""} className={"btn btn-sm text-uppercase float-end primary-color rounded-0"}>Shop More</NavLink></Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" className="w-100" width={"100"} src="https://static-01.daraz.com.np/p/e35542a2fa3fcdca4c38698832bec707.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Chips Onion 1kg</Card.Title>
                            <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" className="w-100" width={"100"} src="https://static-01.daraz.com.np/p/e35542a2fa3fcdca4c38698832bec707.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Chips Onion 1kg</Card.Title>
                            <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>  <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" className="w-100" width={"100"} src="https://static-01.daraz.com.np/p/e35542a2fa3fcdca4c38698832bec707.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Chips Onion 1kg</Card.Title>
                            <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>  <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" className="w-100" width={"100"} src="https://static-01.daraz.com.np/p/e35542a2fa3fcdca4c38698832bec707.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Chips Onion 1kg</Card.Title>
                            <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>  <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" className="w-100" width={"100"} src="https://static-01.daraz.com.np/p/e35542a2fa3fcdca4c38698832bec707.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Chips Onion 1kg</Card.Title>
                            <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>  <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" className="w-100" width={"100"} src="https://static-01.daraz.com.np/p/e35542a2fa3fcdca4c38698832bec707.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Chips Onion 1kg</Card.Title>
                            <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default FlashSale;