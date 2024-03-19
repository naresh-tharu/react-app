import { useFormik } from "formik";
import { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import * as Yup from "yup";

const BrandFormComponent = ({ initialValue, submitAction }) => {
    const brandSchema = Yup.object({
        title: Yup.string().required(),
        link: Yup.string().url().nullable(),
        status: Yup.string().matches(/active|inactive/).default("inactive"),
        image: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: brandSchema,
        onSubmit: (data) => {
            //file upload
            try {
                let formData = new FormData();
                if(data.image && typeof data.image==='object'){
                    formData.append('image', data.image, data.image.filename)
                }
                formData.append('title', data.title)
                formData.append('status', data.status)
                submitAction(formData, initialValue?.id);
            } catch (exception) {
                console.log({ exception })
            }
        }
    })

    useEffect(() => {
        if(initialValue){
            formik.setValues({
                ...initialValue
            })
        }
    }, [initialValue])
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"3"}>
                            <Form.Label>Title:</Form.Label>
                        </Col>
                        <Col sm={"9"}>
                            <Form.Control
                                type="text"
                                name="title"
                                onChange={formik.handleChange}
                                value={formik.values?.title}
                                placeholder="Enter Brand Title..."
                                className="shadow-none border-light-subtle"
                                size="md"
                                required
                            />
                            <span className="text-danger">{formik.errors?.title}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"3"}>
                            <Form.Label>Status:</Form.Label>
                        </Col>
                        <Col sm={"9"}>
                            <Form.Select
                                name="status"
                                onChange={formik.handleChange}
                                value={formik.values?.status}
                                className="shadow-none border-light-subtle"
                                required
                                size="md"
                            >
                                <option>Please Select One</option>
                                <option value={"active"}>Active</option>
                                <option value={"inactive"}>Inactive</option>
                            </Form.Select>
                            <span className="text-danger">{formik.errors?.status}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"3"}>
                            <Form.Label>Image:</Form.Label>
                        </Col>
                        <Col sm={"6"}>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={(e) => {
                                    let single = e.target.files[0];
                                    let ext = (single.name.split(".")).pop();
                                    console.log(ext);
                                    if (['jpg', 'jpeg', 'png', 'bmp', 'svg', 'webp'].includes(ext.toLowerCase())) {
                                        if (single.size <= 5000000) {
                                            formik.setValues({
                                                ...formik.values,
                                                image: single
                                            })
                                        } else {
                                            formik.setErrors({
                                                ...formik.errors,
                                                image: "File size should be less than 5MB"
                                            })
                                        }
                                    } else {
                                        formik.setErrors({
                                            ...formik.errors,
                                            image: "Image cannot be null/empty"
                                        })
                                    }
                                }}
                                accept="image/*"
                                className="shadow-none border-light-subtle"
                                size="md"
                                required = {initialValue && initialValue.image ? false:true}
                            />
                            <span className="text-danger">{formik.errors?.image}</span>
                        </Col>
                        <Col sm={3}>
                            {
                                formik.values && formik.values.image && typeof (formik.values.image) === 'object' ?
                                    <img src={URL.createObjectURL(formik.values.image)} className='img img-fluid' alt='' />
                                    : (
                                        formik.values && formik.values.image && typeof (formik.values.image)==='string' ? <img alt="" className="img img-fluid" src={process.env.REACT_APP_ASSETS_URL+"/uploads/brand/"+formik.values.image} />:<></>
                                    )
                            }
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={{ offset: 3, span: 9 }}>
                            <Button variant="success" type="submit" size="sm" className="me-3"><FaPaperPlane /> Submit</Button>
                            <Button variant="danger" type="reset" size="sm"><FaTrash /> Reset</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </>
    )
}
export default BrandFormComponent;