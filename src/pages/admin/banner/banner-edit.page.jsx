import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { FaArrowLeft, } from "react-icons/fa";
import BannerFormComponent from "./BannerFormComponent";
import { toast } from "react-toastify";
import Banner from ".";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const BannerEdit = () => {
    const [loading, setLoading] = useState(false);
    let [banner, setBanner] = useState();
    const navigate = useNavigate();
    const params = useParams();

    const updateBanner = async (data, id) => {
        setLoading(true)
        try {
            let response = await Banner.bannerSvc.updateBanner(data, id);
            if (response.status) {
                toast.success(response.msg);
                navigate("/admin/banner")

            } else {
                toast.error(response.msg);
            }

        } catch (exception) {
            console.log(exception);
            toast.error("Banner could not be registered at this moment...");
        }
    }

    const loadBanner = async () => {
        try {
            let id = params.id;
            let data = await Banner.bannerSvc.getBannerById(id);
            console.log(data)
            //TODO: API to update
            setBanner({
                id: data.result._id,
                title: data.result.title,
                status: data.result.status,
                link: data.result.link,
                image: data.result.image

            })

        } catch (exception) {
            toast.error("Banner could not be found.")
            navigate('/admin/banner')

        }
    }

    useEffect(() => {
        //detail
        loadBanner();
    }, [])
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={4}><h1 className="mt-4">Banner Edit</h1></Col>
                    <Col sm={8}>
                        <NavLink to={"/admin/banner"} className={"mt-4 btn btn-sm btn-success float-end"}><FaArrowLeft /> Go Back </NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin/banner"}>Banner List</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Banner Edit</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="shadow border-0 rounded-lg bg-body-tertiary mx-auto" style={{ width: "45rem" }}>
                    <Card.Body>
                        {
                            loading ? <CircleLoader color="#36d7b7"
                                loading={loading}
                            /> :
                                <BannerFormComponent
                                    initialValue={banner} submitAction={updateBanner}
                                />
                        }

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default BannerEdit;