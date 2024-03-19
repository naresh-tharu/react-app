import HTTPService from "../../../services/http.service";
class CategoryService extends HTTPService {
    createCategory = async (data) => {
        try {
            let response = await this.postrequest(
                '/v1/category',
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    updateCategory=async(data, id)=>{
        try {
            let response = await this.patchrequest(
                '/v1/category/'+id,
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    listAllCategories = async (perpage, page) => {
        try {
            let query = []
            if (page) {
                query.push("page=" + page);
            }
            if (perpage) {
                query.push("perpage=" + perpage)
            }
            let data = await this.getRequest(
                '/v1/category?' + query.join("&"),
                { auth: true }
            )
            return data;
        } catch (err) {
            throw err;
        }
    }
    listAllParentCategories = async (perpage, page) => {
        try {
            let query = []
            if (page) {
                query.push("page=" + page);
            }
            if (perpage) {
                query.push("perpage=" + perpage)
            }
            let data = await this.getRequest(
                '/v1/category/all-parents?' + query.join("&"),
                { auth: true }
            )
            return data;
        } catch (err) {
            throw err;
        }
    }
    deleteCategoryById = async (id) => {
        try {
            let res = await this.deleteRequest(
                'v1/category/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
    getCategoryById = async (id) => {
        try {
            let res = await this.getRequest(
                'v1/category/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
}
export default CategoryService;