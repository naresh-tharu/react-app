import { Container, Row } from "react-bootstrap"
import { GridList } from "../../../components/grid/grid-6-col.component"
import brand from "../../admin/brand/index"
import { useState, useEffect } from 'react'

export const HomeBrandGrid = () => {
    const [brandList, setBrandList] = useState();
    const getBrand = async () => {
        try {
            let response = await brand.brandSvc.listAllActiveBrands();
            if (response.status) {
                setBrandList(response.result);
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getBrand()
    }, [])
    return (<>
        <Container className="my-5 down-style">
            <h4 className="pb-2">Brand List</h4>
            <Row>

                {
                    brandList && brandList.map((item, index) => (
                        <GridList
                            key={index}
                            data={item}
                            contentType={"brand"}
                        />

                    ))
                }
            </Row>
        </Container>
    </>)
}