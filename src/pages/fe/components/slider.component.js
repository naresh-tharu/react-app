import { useEffect, useState } from "react"
import { SliderComponent } from "../../../components/slider/slider.component"
import { bannerData } from "../../mock.data"
import banner from "../../admin/banner/index"

export const HomeBannerSlider = () => {
    // data 
    let [data, setData] = useState()
    const getHomeBanner = async () => {
        try {
            let response = await banner.bannerSvc.getBannerForHome();
            if (response.status) {
                let data = response.result.map((item) => {
                    return {
                        _id: item._id,
                        title: item.title,
                        link: item.link,
                        image: process.env.REACT_APP_ASSETS_URL + "/uploads/banner/" + item.image,
                    }
                })
                setData(data)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        // TODO: API Consume 
        getHomeBanner()
    }, [])
    return (<>

        <SliderComponent data={data} showCaption={false} />

    </>)
}