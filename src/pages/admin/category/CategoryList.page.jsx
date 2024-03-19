import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Breadcrumb,  Badge } from "react-bootstrap";
import {  FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import Category from ".";

import DataTable from "react-data-table-component";
import LightBox from "../../../components/lightbox/image-lightbox.component";

import TableActionButtons from "../../../components/table/table-actions.component";

const customStyles = {
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            // backgroundColor: "#000000",
            background:"#212529",
            color: "#ffffff",
            fontSize:"14px",
            textTransform:"uppercase"
            // border:"1px solid #cccccc"

        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            // border:"1px solid #cccccc"
        },
    },
};

const CategoryList = () => {
    let [data, setData] = useState();
    let [loading, setLoading] = useState(true);
    let [pageData, setPageData] = useState({ totalRows: 0, page: 1, perPage: 10 });

    const deleteAction = async (id) => {
        try {
            setLoading(true)
            let response = await Category.categorySvc.deleteCategoryById(id)
            if (response.status) {
                loadData(pageData);
                toast.success(response.msg)

            }
        } catch (exception) {
            throw exception;
        }
    }


    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Parent',
            selector: row => row.parent ? row.parent.name:"-",
        },
        {
            name: 'Status',
            selector: row => <Badge bg={row.status === 'active' ? 'success' : "danger"}> {row.status} </Badge>,
        },
        {
            name: 'Image',
            selector: row => <LightBox path={"category"} image={row.image} />,
        },
        {
            name: 'Action',
            selector: row => <TableActionButtons
                contentId={row._id}
                editurl={'/admin/category/'+row._id}
                deleteAction={deleteAction}

            />
        },
    ];

    const handlePageChange = page => {
        setPageData({
            ...pageData,
            page: page
        })
        loadData({ perPage: pageData.perPage, page: page })
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);
        setPageData({
            ...pageData,
            page: page,
            perPage: newPerPage
        })
        loadData({ perPage: newPerPage, page: page })
        // setLoading(false);
    };

    const loadData = useCallback(async ({
        perPage = 10,
        page = 1
    }) => {
        try {
            let categoryList = await Category.categorySvc.listAllCategories(perPage, page)
            if (categoryList.status) {
                setData(categoryList.result)
                setPageData({
                    totalRows: categoryList.meta.total
                })
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            toast.warning("Error while fetching category data...");
        }
    }, [])
    useEffect(() => {
        loadData(pageData)
    }, [loadData])
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={9}><h1 className="mt-4">Category Listing</h1></Col>
                    <Col sm={3}>
                        <NavLink to={"/admin/category/create"} className={"mt-4 btn btn-success float-end"}><FaPlus /> Create Category</NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Category List</Breadcrumb.Item>
                </Breadcrumb>

                <DataTable
                    columns={columns}
                    data={data}
                    progressPending={loading}
                    pagination
                    responsive
                    customStyles={customStyles}
                    paginationServer
                    paginationTotalRows={pageData.totalRows}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                />
            </Container>
        </>
    )
}
export default CategoryList;