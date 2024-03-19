import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { FaArrowLeft, } from "react-icons/fa";
import CategoryFormComponent from "./CategoryFormComponent";
import { toast } from "react-toastify";

import Category from ".";

const CategoryCreate = () => {
    const navigate = useNavigate()
    const handleSubmit = async (data, id=null) => {
        //api call
        try {
            let response = await Category.categorySvc.createCategory(data);
            toast.success("Category Created Successfully.");
            navigate("/admin/category")

        } catch (exception) {
            toast.error("Sorry! Category cannnot be added at this moment..");
        }
    }
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Category Create</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/category"} className={"mt-4 btn btn-success float-end"}><FaArrowLeft /> Go Back </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin/category"}>Category List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Category Create</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="shadow border-0 rounded-lg bg-body-tertiary mx-auto"
                    style={{ width: "45rem" }}>
                    <Card.Body>
                        <CategoryFormComponent
                            initialValue={{
                                name: "",
                                description: "",
                                status: "",
                                parent: "",
                                image: ""
                            }}
                            submitEvent={handleSubmit}
                        />
                    </Card.Body>
                </Card>

            </Container >
        </>
    )
}
export default CategoryCreate;