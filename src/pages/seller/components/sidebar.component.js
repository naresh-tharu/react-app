import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";


const SellerSidebar = () => {
    let logged = useSelector((root) => {
        return root?.User?.loggedInUser
    })
    return (<>
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon"><FaShoppingBasket /></div>
                            Products Management
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <div className="sb-nav-link-icon"><FaShoppingCart /></div>
                            Order Management
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

export default SellerSidebar;