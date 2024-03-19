import { Row, Col, Form, Button } from "react-bootstrap";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Category from ".";
import { useEffect, useState } from "react";

const CategoryFormComponent = ({ initialValue, submitEvent }) => {
    const [defaultCats, setDefaultCats] = useState();
    const categorySchema = Yup.object({
        name: Yup.string().required(),
        parent: Yup.string().nullable(),
        description: Yup.string().nullable(),
        status: Yup.string().matches(/active|inactive/).default("inactive"),
        image: Yup.string().required()
    })
    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: categorySchema,
        onSubmit: (data) => {
            try {
                let formData = new FormData()
                if (data.image && typeof data.image === 'object') {
                    formData.append('image', data.image, data.image.filename);
                }
                formData.append('name', data.name)
                formData.append('parent', data.parent)
                formData.append('status', data.status)
                formData.append('description', data.description)

                submitEvent(formData, initialValue?.id)
            } catch (exception) {
                console.log(exception)
            }


        }
    })

    const loadAllparents = async () => {
        try {
            let response = await Category.categorySvc.listAllParentCategories(200, 1);
            setDefaultCats(response.result)
        } catch (exception) {
            console.log(exception)
        }
    }

    useEffect(() => {
        if(initialValue){
            formik.setValues({
                ...initialValue
            })
        }
        loadAllparents();
    }, [initialValue])
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Name:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values?.name}
                                placeholder="Enter Category Title..."
                                size="md"
                                className="shadow-none border-light-subtle"
                                required
                            />
                            <span className="text-danger">{formik.errors?.name}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Parent:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Select
                                name="parent"
                                onChange={formik.handleChange}
                                value={formik.values?.parent}
                                size="md"
                                className="shadow-none border-light-subtle"
                            >
                                <option>Please Select One</option>
                                {
                                    defaultCats && defaultCats.map((item, index)=>(
                                        <option key={index} value={item._id}>
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                            <span className="text-danger">{formik.errors?.parent}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Description:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Control
                                type="text"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values?.description}
                                placeholder="Enter Category Description..."
                                size="md"
                                className="shadow-none border-light-subtle"
                            />
                            <span className="text-danger">{formik.errors?.description}</span>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Status:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Select
                                name="status"
                                onChange={formik.handleChange}
                                value={formik.values?.status}
                                required
                                size="md"
                                className="shadow-none border-light-subtle"
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
                        <Col sm={"2"}>
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
                                size="md"
                                // value={formik.values?.image}
                                className="shadow-none border-light-subtle"
                                required = {initialValue && initialValue.image ? false:true}
                            />
                            <span className="text-danger">{formik.errors?.image}</span>
                        </Col>
                        <Col sm={4}>
                            {
                                formik.values && formik.values.image && typeof (formik.values.image) === 'object' ?
                                    <img src={URL.createObjectURL(formik.values.image)} className='img img-fluid' alt='' />
                                    : (
                                        formik.values && formik.values.image && typeof (formik.values.image)==='string' ? <img alt="" className="img img-fluid " src={process.env.REACT_APP_ASSETS_URL+"/uploads/category/"+formik.values.image} />:<></>
                                    )
                            }
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={{ offset: 2, span: 10 }}>
                            <Button variant="success" type="submit" size="sm" className="me-3"><FaPaperPlane /> Submit</Button>
                            <Button variant="danger" type="reset" size="sm"><FaTrash /> Reset</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </>
    )
}
export default CategoryFormComponent;