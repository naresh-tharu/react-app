import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { FaArrowLeft, } from "react-icons/fa";
import BrandFormComponent from "./BrandFormComponent";
import { toast } from "react-toastify";
import Brand from ".";
import { useState } from "react";
import { CircleLoader } from "react-spinners";

const BrandCreate = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const addBrand = async (data, id=null) => {
        setLoading(true)
        try {
            let response = await Brand.brandSvc.createBrand(data);
            if (response.status) {
                toast.success(response.msg);
                navigate("/admin/brand")

            } else {
                toast.error(response.msg);
            }

        } catch (exception) {
            console.log(exception);
            toast.error("Brand could not be registered at this moment...");
        }
    }
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Brand Create</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/brand"} className={"mt-4 btn btn-success float-end"}><FaArrowLeft /> Go Back </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin/brand"}>Brand List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Brand Create</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="shadow border-0 rounded-lg bg-body-tertiary mx-auto"
                    style={{ width: "45rem" }}>
                    <Card.Body>
                        {
                            loading ? <CircleLoader color="#36d7b7"
                                loading={loading}
                            /> :
                                <BrandFormComponent
                                    initialValue={{ title: "", status: "", image: "" }} submitAction={addBrand}
                                />
                        }

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default BrandCreate;