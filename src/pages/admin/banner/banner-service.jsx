import HTTPService from "../../../services/http.service";
class BannerService extends HTTPService {
    createBanner = async (data) => {
        try {
            let response = await this.postrequest(
                '/v1/banner',
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    updateBanner=async(data, id)=>{
        try {
            let response = await this.patchrequest(
                '/v1/banner/'+id,
                data,
                { auth: true, file: true }
            )
            return response;
        } catch (exception) {
            throw exception;
        }
    }
    listAllBanners = async (perpage, page) => {
        try {
            let query = []
            if (page) {
                query.push("page=" + page);
            }
            if (perpage) {
                query.push("perpage=" + perpage)
            }
            let data = await this.getRequest(
                '/v1/banner?' + query.join("&"),
                { auth: true }
            )
            return data;
        } catch (err) {
            throw err;
        }
    }
    deleteBannerById = async (id) => {
        try {
            let res = await this.deleteRequest(
                'v1/banner/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
    getBannerById = async (id) => {
        try {
            let res = await this.getRequest(
                'v1/banner/' + id,
                { auth: true }
            )
            return res;

        } catch (exception) {
            throw exception
        }
    }
}
export default BannerService;