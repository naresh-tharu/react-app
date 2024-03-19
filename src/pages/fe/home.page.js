import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { HomeBannerSlider } from "./components/slider.component";
import HomeCategorySideList from "./components/category-sidelist.component";
import { HomeBrandGrid } from "./components/brand-list-grid.component";
import { Col, Container, Row } from "react-bootstrap";
import FlashSale from "./components/flash-sale.component";
import CategoryGrid from "./components/categories-grid.component";
import FeaturedProduct from "./components/featured-product.component";
// import { useState } from "react";
// import { SliderComponent } from "../../components/slider/slider.component";
const HomePage = (props) => {
    // // {name: "", image: "", _id: "1"}
    // let [loggedInUser] = useState({
    //     name: "Sandesh Bhattarai",
    //     _id: 123,
    //     image: ""
    // })
    return (<>
        <HomeBannerSlider />
        <Container className="py-3">
            <Row>
                <Col>
                    {/* Google ads sense */}
                    <a href="https://onlinekhabar.com" target="_blank" rel="noreferrer">
                        <img src="https://www.onlinekhabar.com/wp-content/uploads/2023/06/1230x100-1.gif" alt="ads" className="img img-fluid" />
                    </a>
                </Col>
            </Row>
        </Container>
        <HomeCategorySideList/>
        <FlashSale/>
        <CategoryGrid/>
        <HomeBrandGrid />
        <FeaturedProduct/>
    </>)
}

export default HomePage;