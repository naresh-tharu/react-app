import { Container, Row, Card } from "react-bootstrap"
import { FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Card className="mt-5 text-center py-4 border-0">
                        <h1>404</h1>
                        <h4 className="text-uppercase">oop! page not found</h4>
                        <p>Sorry, the page you're looking for doesn't exist.</p>
                    </Card>
                </Row>
                <hr/>
                <NavLink to={"/"} className={"btn btn-warning nav-link"}><FaHome /> Return Home</NavLink>

            </Container>
        </>)
}