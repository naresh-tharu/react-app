import { NavLink, useNavigate } from "react-router-dom"

import { Button, Card, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import authSvc from "./auth.service"

import { useDispatch } from "react-redux"
import { setUser } from "../../../reducers/user.slicer"


const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [credentials, setCredentials] =  useState({
        email: null, 
        password:null
    })
    const [error, setErrors] = useState({
        email: null, 
        password: null
    })

    const handleChange = (e)=>{
        let {value, name} = e.target;

        if(value){
            setErrors({
                ...error,
                [name]: null
            })
        } else {
            setErrors({
                ...error,
                [name]: name+" is required"
            })
        }
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            if(!credentials.email){
                setErrors({
                    ...error,
                    email: "Email is required"
                })
            } else {
                // 
                let response = await authSvc.loginProcess(credentials)
                if(response.status){
                    localStorage.setItem("accessToken", response.result.accessToken);
                    localStorage.setItem("refreshToken", response.result.refreshToken);
                    // let user = {
                    //     id: response.result.user._id,
                    //     name: response.result.user.name,
                    //     email: response.result.user.email,
                    //     role: response.result.user.role
                    // }
                    
                    // Reducer event dispatch
                    dispatch(setUser(response.result.user));

                    // localStorage.setItem('user', JSON.stringify(user));

                    toast.success("Welcome to your Dashboard!!")
                    navigate("/"+response.result.user.role)
                } else {
                    // login failed 
                    toast.error(response.msg)
                }
            }
        } catch(exception){
            //
            
            toast.error(exception.message)
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        let user = localStorage.getItem('user')

        if(token && user){
            if(typeof user === 'string'){
                user = JSON.parse(user);
            }
            navigate("/"+user.role)
        }
    },[navigate])

    return (<>

        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-5">

                    <Card
                        className="shadow border-0 rounded-lg bg-body-tertiary mx-auto"
                        style={{width:"25rem"}}
                    >
                        <Card.Header>
                            <h4 className="text-center text-secondary font-weight-light my-2">Login</h4>
                        </Card.Header>

                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.FloatingLabel
                                    controlId="email"
                                    label="Username"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        onChange={handleChange}
                                        type="email" 
                                        name="email"
                                        size="sm"
                                        className="shadow-none border-light-subtle"
                                        
                                    />
                                    
                                </Form.FloatingLabel>
                                <span className="text-danger">
                                    {error?.email}
                                </span>

                                <Form.FloatingLabel
                                    controlId="password"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        type="password" 
                                        name="password"
                                        onChange={handleChange}
                                        size="sm"
                                        required
                                        className="shadow-none border-light-subtle"
                                    />
                                </Form.FloatingLabel>
                                <span className="text-danger"></span>
                                <div className="mt-3 mb-0">
                                    <Button size="md" style={{width:"23rem"}} variant="success" type="submit">
                                        Login
                                    </Button>
                                </div>
                                    <div className="d-flex justify-content-between py-3 align-items-center">
                                    <NavLink className={"nav-link fs-14"} to="/forgot-password">
                                        Forgot Password
                                    </NavLink>
                                    Or 
                                    <NavLink className={" nav-link fs-14"} to="/register">
                                        Register
                                    </NavLink>
                                    </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    </>)
}

export default LoginPage