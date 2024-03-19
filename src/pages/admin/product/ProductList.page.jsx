import { NavLink } from "react-router-dom";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
const ProductList = () => {
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Products Listing</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/products/create"} className={"mt-4 btn btn-success float-end"}><FaPlus /> Create Products</NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Product List</Breadcrumb.Item>
                </Breadcrumb>

                <Table striped bordered hover size="sm" className="table-responsive-sm table-responsive-md">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>S.N.</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Categories</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Brand</th>
                            <th>isFeatured</th>
                            <th>Attributes</th>
                            <th>Seller</th>
                            <th>Parent</th>
                            <th>Image</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </Container>

        </>
    )
}
export default ProductList;