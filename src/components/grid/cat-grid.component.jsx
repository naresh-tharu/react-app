import {Col, Card} from "react-bootstrap"
import { NavLink } from "react-router-dom";
const CatGridComponent = ()=>{
    return(
        <>
        <Col sm={12} md={6} lg={2}>
                    <NavLink to={""} className={"nav-link"}>
                    <Card style={{ width: '15rem' }} className="rounded-0">
                        <Card.Img variant="top" className="w-100" height={"100px"} width={"100px"} src="https://static-01.daraz.com.np/p/83d6634139030316b202549a827f90a0.jpg" alt="" />
                        <Card.Body>
                            <Card.Title className="fs-14 p-0">Fitness & Activity Trackers</Card.Title>
                            {/* <Card.Text>
                                Rs.19<br/>
                                <strike className="text-muted">Rs.85</strike>
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                    </NavLink>
                </Col>
        </>
    )
}
export default CatGridComponent;