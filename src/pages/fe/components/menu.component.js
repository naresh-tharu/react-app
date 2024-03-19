import { Navbar, Container, Nav, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
//import { FaUser, FaUsers } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import { setUser } from "../../../reducers/user.slicer"
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa"


// import "" from "../../"
// same location => ./ 
// one step outside from CWD => ../
// export const HomeMenu = (props) => {
export const HomeMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let user = useSelector((root) => {
        return root.User.loggedInUser;
    })

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear()
        dispatch(setUser({}));
        navigate('/')

    }
    return (<>
        <Navbar className="p-0 m-0 fs-14 brand-bg"  variant="success">
            <Container>

                {/* <NavLink className={"navbar-brand"} to="/">Logo Here</NavLink> */}
                <Navbar.Toggle aria-controls="navbarSupportedContent1" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarSupportedContent1">
                    {/* <Nav className="me-auto">
                        <Nav.Item>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={"nav-link"} to="/categories">Categories</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={"nav-link"} to="/brands">Brands</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className={"nav-link"} to="/all-products">Products</NavLink>
                        </Nav.Item>
                    </Nav> */}

                    <Nav className="ms-auto ">
                        <Nav.Item>
                            <NavLink to="" className="nav-link text-white">Track Order</NavLink>
                        </Nav.Item>
                        {
                            user && user.name ? <>
                                <Nav.Item>
                                    <NavLink className={"nav-link text-white"} to={"/" + user.role}>
                                        {user.name}
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink className={"nav-link text-white"} onClick={logout} to="/">
                                        Logout
                                    </NavLink>
                                </Nav.Item>
                            </> : <>
                                <Nav.Item>
                                    <NavLink className={"nav-link text-white"} to="/login">

                                        Login </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink className={"nav-link text-white"} to="/register">
                                        Register
                                    </NavLink>
                                </Nav.Item>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <section className="bg-white position-sticky top-0 z-1 py-2">
            <Container>
                <Row className="align-items-center">
                    <Col lg={3}>
                        <NavLink className={"nav-link"} to="/">
                            <h1 className="brand-color"><span className="primary-color">e</span>Store</h1>
                            
                        </NavLink>
                    </Col>
                    <Col lg={6}>
                        <Form className="d-flex position-relative">
                            <Form.Control size="md" type="search" className="lh-lg shadow-none border-light-subtle" placeholder="Search..." />
                            <Button size="md" variant="success" type="submit" className="brand-bg rounded-0 position-absolute btn-search px-3 lh-lg">
                                <FaSearch />
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={3} className="d-flex align-items-center justify-content-center">
                        <NavLink to={""} className={"nav-link pe-3 "}><FaHeart className="fs-3 px-1"/> Wishlist</NavLink>
                        <NavLink className="border-0 position-relative">
                            <FaShoppingCart className="fs-4 text-black" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </section>
        <hr className="m-0 p-0 z-1" />

    </>)
}