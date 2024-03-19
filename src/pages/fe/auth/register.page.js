import { useFormik } from "formik"
import { useState, useEffect } from "react"
import { Card, Form, Button, Col, FormControl } from "react-bootstrap"
import { FaPaperPlane, FaTrash } from "react-icons/fa"
import * as Yup from "yup"

import authSvc from "./auth.service"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {

    const [btnDsb] = useState(false);
    const navigate = useNavigate();

    const userSchema = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        role: Yup.string()
        .matches(/seller|customer/)
        ,
        phone: Yup.string().nullable(),
        address: Yup.string(),
        image: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            role: 'customer',
            phone: "",
            address: "",
            image: ""
        },
        validationSchema: userSchema,
        onSubmit: async (data) => {
            try{
                let formData = authSvc.datamap(data);
                await authSvc.registerUser(formData);
                toast.success("Your account has been registered successfully. Please check your email for further process.")
                navigate('/')
            } catch(exception){
                console.error(exception);
            }
        }
    })
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
                <div className="col-lg-8">

                    <Card
                        className="shadow border-0 rounded-lg bg-body-tertiary mx-auto"
                        style={{width:"30rem"}}
                    >
                        <Card.Header>
                            <h4 className="text-center my-2 text-secondary">
                                User Registration
                            </h4>
                        </Card.Header>
                        <Card.Body>

                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className="row mb-3 align-items-center" controlId="formGridName">
                                    <Form.Label className=" col-sm-3">Name </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            name="name"
                                            onChange={formik.handleChange}
                                            size="md" 
                                            type="text" 
                                            placeholder="Enter your Full Name" 
                                            className="shadow-none border-light-subtle "
                                        />
                                        <span className="text-danger">{formik.errors?.name}</span>
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="formGridEmail" className="row mb-3 align-items-center">
                                    <Form.Label className="col-sm-3">Email </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            size="md" 
                                            type="email"
                                            name="email"
                                            onChange={formik.handleChange} 
                                            placeholder=" Email" 
                                            className="shadow-none border-light-subtle "
                                        />
                                        <span className="text-danger">
                                            {
                                                formik.errors?.email
                                            }</span>

                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3 row align-items-center " controlId="formGridAddress2" >
                                    <Form.Label className="col-sm-3">Phone </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            size="md" 
                                            type="tel" 
                                            name="phone"
                                            onChange={formik.handleChange}
                                            placeholder="Phone Number" 
                                            className="shadow-none border-light-subtle "
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3 row " controlId="formGridAddress2" >
                                    <Form.Label className="col-sm-3">Address</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control 
                                            as="textarea"
                                            size="sm"
                                            rows={5}
                                            name="address"
                                            onChange={formik.handleChange}
                                            className="shadow-none border-light-subtle"

                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="row mb-3 align-items-center" controlId="formGridState">
                                    <Form.Label className="col-sm-3">Role</Form.Label>
                                    <Col sm={9}>
                                        <Form.Select
                                            name="role"
                                            size="md" 
                                            className="shadow-none border-light-subtle "
                                            onChange={(e) => {
                                                let {value} = e.target;
                                                formik.setValues({
                                                    ...formik.values,
                                                    role: value
                                                })
                                            }}
                                            defaultValue="Choose..."
                                        >
                                            <option value={"customer"}>Customer</option>
                                            <option value={"seller"}>Seller</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="row mb-3 align-items-center" >
                                    <Form.Label className="col-sm-3">Image</Form.Label>
                                    <Col sm={6}>
                                        <FormControl 
                                            size="md" 
                                            name="image" 
                                            className="shadow-none border-light-subtle "
                                            onChange={(e) => {
                                                // single file upload 
                                                // {0:uploadedFileObject}
                                                // {0: uploaded, 1: uploaded}
                                                let single = e.target.files[0];
                                                if(single){
                                                    let ext = (single.name.split(".")).pop();
                                                    // console.log(single, single.size)
    
                                                    if(['jpg','jpeg','png', 'bmp','svg', 'webp'].includes(ext.toLowerCase())){
                                                        if(single.size <= 5000000){
                                                            formik.setValues({
                                                                ...formik.values, 
                                                                image: single
                                                            })
                                                        } else {
                                                            formik.setErrors({
                                                                ...formik.errors,
                                                                image: "File size should be less than 5mb"
                                                            })
                                                        }
                                                    } else {
                                                        formik.setErrors({
                                                            ...formik.errors,
                                                            image: "Image cannot be null/empty"
                                                        })
                                                    }
                                                    
                                                    
    
    
                                                    // formik.setErrors({
                                                    //     ...formik.errors,
                                                    //     image: "Error Msg"
                                                    // })
                                                } else {
                                                    formik.setValues({
                                                        ...formik.values, 
                                                        image: null
                                                    })
                                                }
                                            }}
                                            type="file"
                                        />
                                        <span className="text-danger">{formik.errors ? formik.errors.image : ''}</span>
                                    </Col>
                                    <Col sm={3}>
                                        {
                                            formik.values && formik.values.image && typeof(formik.values.image) === 'object'
                                                ? 
                                                <img src={URL.createObjectURL(formik.values.image)} className="img img-fluid" alt="" />
                                                : <></>
                                        }
                                    </Col>
                                </Form.Group>


                                <Form.Group className="row mb-3">
                                    <Col sm={{offset: 3, span: 9}}>
                                        <Button size="sm" variant="danger" type="reset" className="me-3">
                                            <FaTrash /> &nbsp;&nbsp;Reset
                                        </Button>
                                        <Button disabled={btnDsb} size="sm" variant="success" type="submit">
                                            <FaPaperPlane />&nbsp;&nbsp;Submit
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>

                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    </>)
}

export default RegisterPage