import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { FaArrowLeft, } from "react-icons/fa";
import ProductFormComponent from "./ProductFormComponent";
import product from "./";
import { toast } from "react-toastify";
const ProductCreate = () => {
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            let response = await product.productSvc.createProduct(data);
            if (response) {
                toast.success("Product created successfully!!!")
                navigate('/admin/product')
            }
        } catch (exception) {
            console.log(exception)
            toast.error("Error while creating product. Please reload an try again...");
        }
    }
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Products Create</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/product"} className={"mt-4 btn btn-success float-end"}><FaArrowLeft /> Go Back </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin/product"}>Products List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Product Create</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Body>
                        <ProductFormComponent submitEvent={onSubmit} />
                    </Card.Body>
                </Card>

            </Container >
        </>
    )
}
export default ProductCreate;