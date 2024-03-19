import { Container, Row, Col } from "react-bootstrap"
// import { GridList } from "../../../components/grid/grid-6-col.component"
import { NavLink } from "react-router-dom"

export const HomeCategorySideList = () => {
    return (<>

<Container>
    <Row className="justify-content-between">
        <Col lg={2} className="me-2">
            <Row className="align-items-center bg-white rounded-pill py-1">
                <Col lg={8}><NavLink to={""} className={"nav-link"}><img className="rounded-circle" width={"40"} src="https://icms-image.slatic.net/images/ims-web/3648b8bb-990a-42e6-9e72-8581012011ea.png" alt=""/> Mart</NavLink></Col>
                <Col lg={{offset:4}}></Col>
            </Row>
        </Col>
        <Col lg={2} className="me-2">
            <Row className="align-items-center bg-white rounded-pill py-1">
                <Col lg={8}><NavLink to={""} className={"nav-link"}><img className="rounded-circle" width={"40"} src="https://icms-image.slatic.net/images/ims-web/b0db149b-e960-480c-99f3-96e581c46e94.png" alt=""/> Fashion</NavLink></Col>
                <Col lg={{offset:4}}></Col>
            </Row>
        </Col>
        <Col lg={2} className="me-2">
            <Row className="align-items-center bg-white rounded-pill py-1">
                <Col lg={12}><NavLink to={""} className={"nav-link"}><img className="rounded-circle" width={"40"} src="https://icms-image.slatic.net/images/ims-web/a340da07-79cb-4767-877e-44f5adbcc4f5.png" alt=""/> Home & Decor</NavLink></Col>
                
            </Row>
        </Col>
        <Col lg={2} className="me-2">
            <Row className="align-items-center bg-white rounded-pill py-1">
                <Col lg={12}><NavLink to={""} className={"nav-link"}><img className="rounded-circle" width={"40"} src="https://icms-image.slatic.net/images/ims-web/5caa7383-311b-4783-95cf-73b6d585db9d.png" alt=""/> Beauty</NavLink></Col>
                <Col lg={{offset:2}}></Col>
            </Row>
        </Col>
        <Col lg={2} className="me-2">
            <Row className="align-items-center bg-white rounded-pill py-1">
                <Col lg={10}><NavLink to={""} className={"nav-link"}><img className="rounded-circle" width={"40"} src="https://icms-image.slatic.net/images/ims-web/f11ff793-bc02-4348-aec9-d3351ee8640b.png" alt=""/> Proudly Nepali</NavLink></Col>
                <Col lg={{offset:2}}></Col>
            </Row>
        </Col>
    </Row>
</Container>
    {/* <Container className="my-5">
            <Row className="bg-light customheader">
                <Col>
                    <h4>Category List....</h4>
                </Col>
            </Row>
            <hr />
            <Row>
                <GridList />
                <GridList />
                <GridList />
                <GridList />
                <GridList />
                <GridList />
            </Row>
        </Container> */}
    </>)
}
export default HomeCategorySideList;