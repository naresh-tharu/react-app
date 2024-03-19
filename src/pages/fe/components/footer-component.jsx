import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
    return (
        <>
            <footer className="brand-bg py-5">
                <Container>
                    <Row className="align-items-baseline">
                        <Col lg={3} sm={12}>
                            <h3 className="bg-white d-inline px-2"><span className="primary-color">e</span><span className="brand-color">Store</span></h3>
                            <p className="text-white fs-14 pt-3">Online Shopping In Nepal - estore.com.np</p>
                            <ul className="list-unstyled text-white fs-14 footer-contact-widget">
                                <li>
                                    <span><strong>Address:</strong> </span>
                                    <span> Balkhu, Kathmandu</span>
                                </li>
                                <li>
                                    <span><strong>Phone: </strong> </span>
                                    <span> +977-9868058070</span>
                                </li>
                                <li>
                                    <span><strong>Email: </strong> </span>
                                    <span> estore@shopping.com</span>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex footer">
                                <li> <NavLink to={""} className={"nav-link px-1"}><FaFacebook color="white" /></NavLink> </li>
                                <li> <NavLink to={""} className={"nav-link px-1"}><FaInstagram color="white" /></NavLink> </li>
                                <li> <NavLink to={""} className={"nav-link px-1"}><FaYoutube color="white" /></NavLink> </li>
                                <li> <NavLink to={""} className={"nav-link px-1"}><FaTwitter color="white" /></NavLink> </li>
                                <li> <NavLink to={""} className={"nav-link px-1"}><FaWhatsapp color="white" /></NavLink> </li>
                                <li> <NavLink to={""} className={"nav-link px-1"}><FaGooglePlus color="white" /></NavLink> </li>

                            </ul>
                        </Col>
                        <Col lg={3} sm={12} className="text-white down-style">
                            <h4 className="py-2">About Us</h4>
                            <ul className="list-unstyled fs-14 pt-2">
                                <li><NavLink to={""} className={"nav-link"}>Career</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Our Stores</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Our Cares</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Terms & Conditions</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Privacy Policy</NavLink></li>
                            </ul>
                        </Col>
                        <Col lg={3} sm={12} className="text-white down-style">
                            <h4 className="py-2">Useful link</h4>
                            <ul className="list-unstyled fs-14 pt-2">
                                <li><NavLink to={""} className={"nav-link"}>Become Vendor</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Warranty</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Full Refund</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Referral</NavLink></li>
                            </ul>
                        </Col>
                        <Col lg={3} sm={12} className="text-white down-style">
                            <h4 className="py-2">My Account</h4>
                            <ul className="list-unstyled fs-14 pt-2">
                                <li><NavLink to={"/login"} className={"nav-link"}>Login</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Order History</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>My Wishlist</NavLink></li>
                                <li><NavLink to={""} className={"nav-link"}>Track Order</NavLink></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default FooterComponent;