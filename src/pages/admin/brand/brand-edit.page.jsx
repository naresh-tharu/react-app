import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { FaArrowLeft, } from "react-icons/fa";
import BrandFormComponent from "./BrandFormComponent";
import { toast } from "react-toastify";
import Brand from ".";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const BrandEdit = () => {
    const [loading, setLoading] = useState(false);
    let[brand, setBrand]=useState();
    const navigate = useNavigate();
    const params = useParams();

    const updateBrand = async (data, id) => {
        setLoading(true)
        try {
            let response = await Brand.brandSvc.updateBrand(data,id);
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

    const loadBrand = async () => {
        try {
            let id = params.id;
            let data = await Brand.brandSvc.getBrandById(id);
            //TODO: API to update
            setBrand({
                id:data.result._id,
                title:data.result.title,
                status:data.result.status,
                link:data.result.link,
                image:data.result.image

            })

        } catch (exception) {
            toast.error("Brand couldn not be found.")
            navigate('/admin/brand')

        }
    }
    
    useEffect(() => {
        //detail
        loadBrand();
    }, [])
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Brand Edit</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/brand"} className={"mt-4 btn btn-sm btn-success float-end"}><FaArrowLeft /> Go Back </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin/brand"}>Brand List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Brand Edit</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="shadow border-0 rounded-lg bg-body-tertiary mx-auto"
                    style={{ width: "45rem" }}>
                    <Card.Body>
                        {
                            loading ? <CircleLoader color="#36d7b7"
                                loading={loading}
                            /> :
                                <BrandFormComponent
                                    initialValue={brand} submitAction={updateBrand}
                                />
                        }

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default BrandEdit;