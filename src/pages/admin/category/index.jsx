import CategoryList from "./CategoryList.page";
import CategoryCreate from "./CategoryCreate.page";
import CategoryEdit from "./category-edit.page";
import CategoryService from "./category.service";

let categorySvc = new CategoryService()
const Category={
    CategoryList,
    CategoryCreate,
    CategoryEdit,
    categorySvc
    
}
export default Category;