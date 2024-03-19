import { Button, Navbar,Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SellerNavbar = () => {
    const toggleSidebar = () => {
        // decide 
        document.body.classList.toggle('sb-sidenav-toggled');
    }
    return (<>
        <Navbar className="sb-topnav" expand variant="dark" bg="dark">
            <NavLink className={"navbar-brand ps-3"} to="/seller"><FaHome/> Seller Panel </NavLink>
            <Button onClick={toggleSidebar} variant="link" size="sm" className="order-1 order-lg-0 me-4 me-lg-0">
                <FaBars color="white" />
            </Button>
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                
            </div>

            <Nav className="ms-auto ms-md-0 me-3 me-lg-4">
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            align={"end"}
                            id="nav-dropdown-dark-example"
                            title={<FaUser />}
                        >
                            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                            <NavLink className=""to ="/">Logout</NavLink>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Nav>
        </Navbar>
    </>)
}

export default SellerNavbar;