import { Container, Row } from "react-bootstrap"
import { GridList } from "../../../components/grid/grid-6-col.component"

export const HomeBrandGrid = () => {
    return (<>
        <Container className="my-5 down-style">
            <h4 className="pb-2">Brand List</h4>
            <Row>

                <GridList />
                <GridList />
                <GridList />
                <GridList />
                <GridList />
                <GridList />
            </Row>
        </Container>
    </>)
}