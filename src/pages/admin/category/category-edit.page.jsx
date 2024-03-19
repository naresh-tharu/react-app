import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { FaArrowLeft, } from "react-icons/fa";
import CategoryFormComponent from "../category/CategoryFormComponent";
import { toast } from "react-toastify";
import Category from "../category";
import { useCallback, useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const CategoryEdit = () => {
    const [loading, setLoading] = useState(false);
    let[category, setCategory]=useState();
    const navigate = useNavigate();
    const params = useParams();

    const updateCategory = async (data, id) => {
        setLoading(true)
        try {
            
            let response = await Category.categorySvc.updateCategory(data,id);
            if (response.status) {
                toast.success(response.msg);
                navigate("/admin/category")

            } else {
                toast.error(response.msg);
            }

        } catch (exception) {
            console.log(exception);
            toast.error("Category could not be registered at this moment...");
        }
    }

    const loadCategory = async () => {
        try {
            let id = params.id;
            let data = await Category.categorySvc.getCategoryById(id);
            //TODO: API to update
            setCategory({
                id:data.result._id,
                name:data.result.name,
                parent:data.result.parent,
                description:data.result.description,
                status:data.result.status,
                image:data.result.image

            })

        } catch (exception) {
            toast.error("Category could not be found.")
            navigate('/admin/category')

        }
    }
    
    useEffect(() => {
        //detail
        loadCategory();
    }, [])
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Category Edit</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/category"} className={"mt-4 btn btn-sm btn-success float-end"}><FaArrowLeft /> Go Back </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin/category"}>Category List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Category Edit</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="shadow border-0 rounded-lg bg-body-tertiary mx-auto"
                    style={{ width: "45rem" }}>
                    <Card.Body>
                        {
                            loading ? <CircleLoader color="#36d7b7"
                                loading={loading}
                            /> :
                                <CategoryFormComponent
                                    initialValue={category} submitEvent={updateCategory}
                                />
                        }

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default CategoryEdit;