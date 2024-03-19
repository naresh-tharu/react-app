import { Container , Row} from "react-bootstrap";
import CatGridComponent from "../../../components/grid/cat-grid.component";

const CategoryGrid = ()=>{
    return(
        <>
        <Container className="down-style">
            <h4 className="pb-2">Categories</h4>
        <Row>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
                <CatGridComponent/>
               

            </Row>
        </Container>
        </>
    )
}
export  default CategoryGrid;