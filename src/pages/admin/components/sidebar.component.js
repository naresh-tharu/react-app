import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAd, FaHome, FaImage, FaPaperclip, FaShoppingBasket, FaShoppingCart, FaSitemap, FaTags, FaUsers } from "react-icons/fa";

const AdminSidebar = () => {
    let logged = useSelector((root) => {
        return root?.User?.loggedInUser
    })
    return (<>
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading"><h5>Core</h5></div>
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon">
                                <FaHome />
                            </div>
                            Preview Web
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/banner">
                            <div className="sb-nav-link-icon"><FaImage /></div>
                            Banner Management
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/brand">
                            <div className="sb-nav-link-icon"><FaPaperclip /></div>
                            Brand Management
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/category">
                            <div className="sb-nav-link-icon"><FaSitemap /></div>
                            Category Management
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/user">
                            <div className="sb-nav-link-icon"><FaUsers /></div>
                            User Management
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/product">
                            <div className="sb-nav-link-icon"><FaShoppingBasket /></div>
                            Products Management
                        </NavLink>
                        <NavLink className="nav-link" to="/admin/order">
                            <div className="sb-nav-link-icon"><FaShoppingCart /></div>
                            Order Management
                        </NavLink>
                        <div className="sb-sidenav-menu-heading">
                            <h5>Features</h5>
                        </div>
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon"><FaAd /></div>
                            Ads Management
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon"><FaTags /></div>
                            Offer Management
                        </NavLink>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    {logged?.name}
                </div>
            </nav>
        </div>
    </>)
}

export default AdminSidebar;