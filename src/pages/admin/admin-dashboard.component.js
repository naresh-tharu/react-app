import { Breadcrumb, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const AdminDashboard = () => {
    return (<>

        <Container fluid className="px-4">
            <h1 className="mt-4">Admin Dashboard</h1>
            <Breadcrumb className="mt-4">
                <Breadcrumb.Item> <NavLink className={"nav-link"} to={"/"}> Dashboard</NavLink> </Breadcrumb.Item>
                <Breadcrumb.Item active> Admin Dashboard</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
    </>)
}

export default AdminDashboard