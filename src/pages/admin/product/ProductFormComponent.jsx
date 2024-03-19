// import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaMinus, FaPaperPlane, FaPlus, FaTrash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

import Category from "../category"
import Brand from "../brand"

import Select from 'react-select'
import React, { useCallback, useEffect, useState } from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ProductFormComponent = ({submitEvent}) => {
    const [cats, setCats] = useState();
    const [brands, setBrands] = useState();
    let [attrs, setAttrs] = useState([{
        name: null,
        value: null
    }]);

    const productSchema = Yup.object({
        name: Yup.string().required(),
        categories: Yup.array().of(Yup.object()).required(),
        description: Yup.string().nullable(),
        price: Yup.number().min(0, `Minimum Price is Rs.0`),
        discount: Yup.number(),
        brand: Yup.object().nullable(),
        isFeatured: Yup.boolean(),
        status: Yup.string().matches(/active|inactive/).default("inactive"),
        parent: Yup.string().nullable(),
        attributes: Yup.string().nullable(),
        seller: Yup.string().nullable(),
        images: Yup.array().of(Yup.string()).required()
    })
    const formik = useFormik({
        initialValues: {
            name: "",
            categories: "",
            description: "",
            price: "",
            discount: "",
            brand: "",
            isFeatured: "",
            status: "",
            attributes: "",
            seller: "",
            images: ""

        },
        validationSchema: productSchema,
        onSubmit: (data) => {
            try {
                data.attributes = attrs;
                data.categories = data.categories.map((item) => item.value);
                data.brand = data.brand.value;
                let formData = new FormData();
                data.images.map((item)=>{
                    formData.append("images", item, item.name);
                })
                formData.append("name", data.name);
                formData.append("categories", data.categories.join(","));
                formData.append("description", data.description);
                formData.append("price", data.price);
                formData.append("discount", data.discount);

                submitEvent(data);
            } catch (exception) {

            }


        }
    })

    const loadCats = useCallback(async () => {
        try {
            let response = await Category.categorySvc.listAllCategories(100, 1);
            if (response.status) {
                let selCats = response.result.map((item) => (
                    {
                        value: item._id,
                        label: item.name
                    }
                ))
                setCats(selCats)
            }
        } catch (exception) {

        }
    }, [])

    const loadBrands = useCallback(async () => {
        try {
            let response = await Brand.brandSvc.listAllBrands(100, 1);
            if (response.status) {
                let selBrands = response.result.map((item) => (
                    {
                        value: item._id,
                        label: item.title
                    }
                ))
                setBrands(selBrands)
            }
        } catch (exception) {

        }
    }, [])

    useEffect(() => {
        loadCats();
        loadBrands();
    }, [loadCats, loadBrands])

    // console.log(formik.errors);
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
                                placeholder="Enter Products Name..."
                                size="sm"
                                required
                            />
                            <span className="text-danger">{formik.errors?.name}</span>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Categories:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Select
                                defaultValue={formik.values.categories}
                                isMulti
                                name="categories"
                                options={cats}
                                onChange={(selCat) => {
                                    formik.setValues({
                                        ...formik.values,
                                        categories: selCat
                                    })
                                }}

                                className="basic-multi-select form-control-sm"
                                classNamePrefix="select"
                            />

                            <span className="text-danger">{formik.errors?.categories}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Description:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <CKEditor
                                editor={ClassicEditor}
                                data={formik.values?.description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    formik.setValues({
                                        ...formik.values,
                                        description: data
                                    })
                                }}
                            />
                            <span className="text-danger">{formik.errors?.description}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Price:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Control
                                type="number"
                                name="price"
                                onChange={formik.handleChange}
                                placeholder="Enter Products Price..."
                                size="sm"
                            />
                            <span className="text-danger">{formik.errors?.price}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Discount:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Control
                                type="number"
                                name="discount"
                                onChange={formik.handleChange}
                                placeholder="Enter Products Discount..."
                                size="sm"
                            />
                            <span className="text-danger">{formik.errors?.discount}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Brand:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Select
                                defaultValue={formik.values?.brand}
                                name="brand"
                                options={brands}
                                onChange={(selBrand) => {
                                    formik.setValues({
                                        ...formik.values,
                                        brand: selBrand
                                    })
                                }}

                                className="basic-multi-select form-control-sm"
                                classNamePrefix="select"
                            />
                            <span className="text-danger">{formik.errors?.brand}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>isFeatured:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Check // prettier-ignore
                                type="switch"
                                name="isFeatured"
                                onChange={(e) => {
                                    formik.setValues({
                                        ...formik.values,
                                        isFeatured: e.target.checked
                                    })
                                }}
                                size={"sm"}
                                id="custom-switch"
                                label="isFeatured"
                            />

                            <span className="text-danger">{formik.errors?.isFeatured}</span>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"12"} lg={2}>
                            <Form.Label>Attributes:</Form.Label>
                        </Col>
                        <Col sm={"12"} lg={8}>

                            {
                                attrs && attrs.map((item, index) => (
                                    <Row className="mb-3" key={index}>
                                        <Col lg={5} sm={12}>
                                            <Form.Control
                                                type="text"
                                                name="attribute"
                                                value={item['name']}
                                                onChange={(e) => {
                                                    attrs[index]['name'] = e.target.value
                                                    setAttrs([
                                                        ...attrs
                                                    ])

                                                }}
                                                placeholder="Enter Products Attributes..."
                                                size="sm"
                                            />
                                            <span className="text-danger">{formik.errors?.attributes}</span>
                                        </Col>
                                        <Col lg={5} sm={12}>
                                            <Form.Control
                                                type="text"
                                                name="attributeValue"
                                                value={item['value']}
                                                onChange={(e) => {
                                                    attrs[index]['value'] = e.target.value
                                                    setAttrs([
                                                        ...attrs
                                                    ])
                                                }}
                                                placeholder="Enter Products Attributes Value..."
                                                size="sm"
                                            />
                                            <span className="text-danger">{formik.errors?.attributes}</span>
                                        </Col>

                                        {
                                            index === 0 ? <></> :
                                                <Col lg={2} sm={12}>
                                                    <Button size="sm" variant="danger" type="button" onClick={(e) => {
                                                        let allAtrs = [...attrs]
                                                        allAtrs.splice(index, 1)
                                                        setAttrs(
                                                            [...allAtrs]
                                                        )
                                                    }}><FaMinus />
                                                    </Button>
                                                </Col>
                                        }
                                    </Row>
                                ))
                            }

                        </Col>

                        <Col lg={2} sm={12}>
                            <Button size="sm" variant="success" type="button" onClick={(e) => {
                                let attr = {
                                    name: null,
                                    value: null
                                }
                                attrs.push(attr);

                                setAttrs([
                                    ...attrs
                                ])
                            }}><FaPlus /></Button>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Row>
                        <Col sm={"2"}>
                            <Form.Label>Seller:</Form.Label>
                        </Col>
                        <Col sm={"10"}>
                            <Form.Select
                                name="seller"
                                onChange={formik.handleChange}
                                size="sm"
                            >
                                <option>Please Select One</option>

                            </Form.Select>
                            <span className="text-danger">{formik.errors?.seller}</span>
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
                                required
                                size="sm"
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
                        <Col sm={"8"}>
                            <Form.Control
                                type="file"
                                name="images"
                                multiple
                                onChange={(e) => {
                                    let allImages = Object.values(e.target.files);

                                    let images = [];
                                    let errors = [];

                                    allImages.map((single, index) => {
                                        let ext = (single.name.split(".")).pop();
                                        if (['jpg', 'jpeg', 'png', 'bmp', 'svg', 'webp'].includes(ext.toLowerCase())) {
                                            if (single.size <= 5000000) {
                                                images.push(single);
                                                // formik.setValues({
                                                //     ...formik.values,
                                                //     image: single
                                                // })
                                            } else {
                                                errors.push(single.name + ", File size should be less than 5MB")
                                                // formik.setErrors({
                                                //     ...formik.errors,
                                                //     image: 
                                                // })
                                            }
                                        } else {

                                            errors.push(single.name + ",Image cannot be null/empty")
                                            // formik.setErrors({
                                            //     ...formik.errors,
                                            //     image: "Image cannot be null/empty"
                                            // })
                                        }

                                    })

                                    if (errors && errors.length) {
                                        formik.setErrors({
                                            ...formik.errors,
                                            image: errors.join(',')
                                        })
                                    } else {
                                        formik.setValues({
                                            ...formik.values,
                                            images: images
                                        })
                                    }


                                }}
                                accept="image/*"
                                size="sm"
                                required
                            />
                            <span className="text-danger">{formik.errors?.images}</span>
                        </Col>
                        <Col sm={2}>
                            {
                                formik.values && formik.values.images && typeof (formik.values.images) === 'string' ?
                                    <img src={URL.createObjectURL(formik.values.images)} className='img img-fluid' alt='' />
                                    : <></>
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
export default ProductFormComponent;