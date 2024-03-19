import { Card } from "react-bootstrap"
import { CardTitle } from "../card-title.component"
import { NavLink } from "react-router-dom";

const CardComponent = () => {
    return (<>
    <Card>
        <NavLink to="/category/smartphone">
            <Card.Img variant="top" src="https://static-01.daraz.com.np/p/59f357c17fdcaca44711c07f53ac6a20.jpg" />
        </NavLink>
        <Card.Body className="text-center">
            <CardTitle $primary>
                Smart Phone
            </CardTitle>
        </Card.Body>
    </Card>
    </>)
}

export default CardComponent;