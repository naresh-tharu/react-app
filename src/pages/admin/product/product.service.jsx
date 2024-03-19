import HTTPService from "../../../services/http.service";
class ProductService extends HTTPService {
    createProduct = async (data) => {
        try {
            let response = await this.postrequest(
                '/v1/product',
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    updateProduct=async(data, id)=>{
        try {
            let response = await this.patchrequest(
                '/v1/product/'+id,
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    listAllProducts = async (perpage, page) => {
        try {
            let query = []
            if (page) {
                query.push("page=" + page);
            }
            if (perpage) {
                query.push("perpage=" + perpage)
            }
            let data = await this.getRequest(
                '/v1/product?' + query.join("&"),
                { auth: true }
            )
            return data;
        } catch (err) {
            throw err;
        }
    }
    
    deleteProductById = async (id) => {
        try {
            let res = await this.deleteRequest(
                'v1/product/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
    getProductById = async (id) => {
        try {
            let res = await this.getRequest(
                'v1/product/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
}
export default ProductService;