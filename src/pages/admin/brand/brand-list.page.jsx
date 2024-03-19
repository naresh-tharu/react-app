import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Breadcrumb,  Badge } from "react-bootstrap";
import {  FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import Brand from ".";

import DataTable from "react-data-table-component";
import LightBox from "../../../components/lightbox/image-lightbox.component";

import TableActionButtons from "../../../components/table/table-actions.component";

const customStyles = {
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            background:"#212529",
            color: "#ffffff",
            fontSize:"14px",
            textTransform:"uppercase"
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

const BrandList = () => {
    let [data, setData] = useState();
    let [loading, setLoading] = useState(true);
    let [pageData, setPageData] = useState({ totalRows: 0, page: 1, perPage: 10 });

    const deleteAction = async (id) => {
        try {
            setLoading(true)
            let response = await Brand.brandSvc.deleteBrandById(id)
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
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Status',
            selector: row => <Badge bg={row.status === 'active' ? 'success' : "danger"}> {row.status} </Badge>,
        },
        {
            name: 'Image',
            selector: row => <LightBox path={"brand"} image={row.image} />,
        },
        {
            name: 'Action',
            selector: row => <TableActionButtons
                contentId={row._id}
                editurl={'/admin/brand/'+row._id}
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
            let brandList = await Brand.brandSvc.listAllBrands(perPage, page)
            if (brandList.status) {
                setData(brandList.result)
                setPageData({
                    totalRows: brandList.meta.total
                })
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            toast.warning("Error while fetching brand data...");
        }
    }, [])
    useEffect(() => {
        loadData(pageData)
    }, [loadData])
    return (
        <>
            <Container fluid className="px-4">
                <Row className="align-items-center">
                    <Col sm={9}><h1 className="mt-4">Brand Listing</h1></Col>
                    <Col sm={3}>
                        <NavLink to={"/admin/brand/create"} className={"mt-4 btn btn-success float-end"}><FaPlus /> Create Brand</NavLink>
                    </Col>
                </Row>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item as={"li"}>
                        <NavLink className={"text-dark"} to={"/admin"}>Dashboard</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active as={"li"}>Brand List</Breadcrumb.Item>
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
export default BrandList;