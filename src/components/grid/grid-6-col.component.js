import { Col } from "react-bootstrap"
import CardComponent from "../card/card.component"

export const GridList = ({ data, contentType }) => {
    return (<>
        <Col sm={12} md={6} lg={2} className="mb-3">
            <CardComponent data={data} contentType={contentType} />
        </Col>
    </>)
}