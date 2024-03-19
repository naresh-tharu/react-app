import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"

const CategoryListComponent = () => {
    return (
        <>
            <Col lg={2}>
                <ul className="list-unstyled">
                    <div className="d-flex justify-content-between align-items-center bg-body-secondary p-2">
                        <span className="fs-14"><strong><FaBars /> &nbsp;Categories</strong></span>
                        <NavLink to={""} className={"nav-link fs-14"}>View All</NavLink>
                    </div>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Women's Fashion</NavLink>
                        {/*  <ul className="list-unstyled  d-flex justify-content-between">
                            <li><NavLink className={"nav-link fs-12"} to="">Clothing</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Tops & T-shirts</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Hoodies & Sweatshirts</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Jackets and Coats</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Pants & leggings</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Jeans</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Shorts</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Skirts</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Dresses</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Party Wear</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className={"nav-link fs-12"} to="">Traditional Clothing</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Saree</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Kurtas</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Kurtis</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Lehenga</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Unstitched Fabric</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Dupattas, Stoles & Shawls</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to=""></NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className={"nav-link fs-12"} to="">Women's Bags</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Backpacks</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Crossbody Bags</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Wallets & Cardholders</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Clutches</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Top-handle Bags</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className={"nav-link fs-12"} to="">Shoes</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Sneakers</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Boots</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Flat shoes</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Heels</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Sandals</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Wedges</NavLink></li>

                                </ul>
                            </li>
                            <li><NavLink className={"nav-link fs-12"} to="">Accessories</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Belts</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Scarves & Mufflers</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Gloves</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Hats & Caps</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Hair Accessories</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Socks & Tights</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className={"nav-link fs-12"} to="">Lingerie, Sleep & Lounge</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Bras</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Lingerie Sets</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Panties</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Sleep & Lounge Wear</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Robes</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Shapewear</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Sexy Lingerie</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Accessories</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className={"nav-link fs-12"} to="">Girl's Fashion</NavLink>
                                <ul className="list-unstyled">
                                    <li><NavLink className={"nav-link fs-12"} to="">Girl's Clothing</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Girl's Shoes</NavLink></li>
                                    <li><NavLink className={"nav-link fs-12"} to="">Girl's Accessories</NavLink></li>
                                </ul>
                            </li>
    </ul>*/}
                    </li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Health & Beauty</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Men's Fashion</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Watches & Accessories</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Electronics Devices</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">TV & Home Appliances</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Electronics Accessories</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Groceries & Pets</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Babies & Toys</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Home & Lifestyle</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Sports & Outdoor</NavLink></li>
                    <li className="lh-lg"><NavLink className={"nav-link fs-13"} to="">Motors, Tools & DIY</NavLink></li>
                </ul>
            </Col>
        </>
    )
}
export default CategoryListComponent