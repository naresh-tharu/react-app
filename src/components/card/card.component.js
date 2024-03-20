import { Card } from "react-bootstrap"
import { CardTitle } from "../card-title.component"
import { NavLink } from "react-router-dom";

const CardComponent = ({ data, contentType }) => {
    return (<>
        {
            data && <Card>
                <NavLink to={"/" + contentType + "/" + data.slug}>
                    <Card.Img variant="top" src={process.env.REACT_APP_ASSETS_URL + "/uploads/" + contentType + "/" + data.image} />
                </NavLink>
                <Card.Body className="text-center">
                    <CardTitle $primary>
                        {data.name}
                    </CardTitle>
                </Card.Body>
            </Card>
        }
    </>)
}

export default CardComponent;