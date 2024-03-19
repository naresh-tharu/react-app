import BrandList from "./brand-list.page";
import BrandCreate from "./BrandCreate.page";
import BrandService from "./brand-service";
import BrandEdit from "./brand-edit.page";

const brandSvc = new BrandService();
const Brand ={
    BrandList,
    BrandCreate, 
    BrandEdit,
    brandSvc
}
export default Brand;