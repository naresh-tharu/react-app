import BannerList from "./banner-list.page";
import BannerCreate from "./BannerCreate.page";
import BannerService from "./banner-service";
import BannerEdit from "./banner-edit.page";

const bannerSvc = new BannerService();
const Banner ={
    BannerList,
    BannerCreate, 
    BannerEdit,
    bannerSvc
}
export default Banner;