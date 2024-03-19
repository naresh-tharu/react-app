import ProductList from "./ProductList.page";
import ProductCreate from "./ProductCreate.page";
import ProductService from "./product.service";

const productSvc = new ProductService();

const Products={
    ProductList,
    ProductCreate,
    productSvc
}
export default Products;