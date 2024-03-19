import { NavLink } from "react-router-dom";

const AdminFooter = () => {
    let year = (new Date()).getFullYear();
    return (<>
    
    <footer className="py-4 mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Naresh Tharu  - {year}</div>
                            <div>
                                <NavLink to="/">Privacy Policy</NavLink>
                                &middot;
                                <NavLink to="/">Terms &amp; Conditions</NavLink>
                            </div>
                        </div>
                    </div>
                </footer>
    </>)
}
export default AdminFooter;