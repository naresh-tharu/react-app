import HTTPService from "../../../services/http.service";
class BrandService extends HTTPService {
    createBrand = async (data) => {
        try {
            let response = await this.postrequest(
                '/v1/brand',
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    updateBrand=async(data, id)=>{
        try {
            let response = await this.patchrequest(
                '/v1/brand/'+id,
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    listAllBrands = async (perpage, page) => {
        try {
            let query = []
            if (page) {
                query.push("page=" + page);
            }
            if (perpage) {
                query.push("perpage=" + perpage)
            }
            let data = await this.getRequest(
                '/v1/brand?' + query.join("&"),
                { auth: true }
            )
            return data;
        } catch (err) {
            throw err;
        }
    }
    deleteBrandById = async (id) => {
        try {
            let res = await this.deleteRequest(
                'v1/brand/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
    getBrandById = async (id) => {
        try {
            let res = await this.getRequest(
                'v1/brand/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
}
export default BrandService;