import { Card, Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const FeaturedProduct = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        pauseOnHover:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <Container className="down-style pb-5">
                <h4 className="pb-2">Featured Products</h4>
                <Slider {...settings}>
                    <div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div><div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div><div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="me-2">
                            <Card.Img variant="top" src="https://durbarmart.com/uploads/products/featured/iWBKMRz1QGD9z6dPoA3TnOxc6rowCMXHfGWUWMUh.jpg" />
                            <Card.Body>
                                <Card.Title>featured</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>

            </Container>

        </>
    )
}
export default FeaturedProduct;