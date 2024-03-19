import { NavLink } from "react-router-dom";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
const UserList = () => {
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={3}><h1 className="mt-4">Brand Listing</h1></Col>
                    <Col sm={9}>
                        <NavLink to={"/admin/register"} className={"mt-4 btn btn-success float-end"}><FaPlus /> Create User </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>User List</Breadcrumb.Item>
                </Breadcrumb>

                <Table striped bordered hover size="sm">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>S.N.</th>
                            <th>Title</th>
                            <th>Status</th>
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
export default UserList;