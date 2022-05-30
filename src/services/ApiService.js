import axios from "axios";
import AuthService from "./AuthService";


class ApiService {
    responseData

    post = async(path, data = []) => {
        try {
            const response = await axios.post(
                this.getApiUrl(path),
                data,
                this.getHeaders()
            );

            return ApiService.getSuccessResponse(
                response.data.data,
                response.data.message
            );
        } catch (error) {
            return ApiService.getErrorResponse(error);
        }
    };

    upload = async(
        path,
        data = []
    ) => {
        try {
            const response = await axios.post(
                this.getApiUrl(path),
                data,
                this.getUploadHeaders()
            );

            return ApiService.getSuccessResponse(
                response.data.data,
                response.data.message
            );
        } catch (error) {
            return ApiService.getErrorResponse(error);
        }
    };

    get = async(path) => {
        try {
            const response = await axios.get(
                this.getApiUrl(path),
                this.getHeaders()
            );

            return ApiService.getSuccessResponse(
                response.data.data,
                response.data.message
            );
        } catch (error) {
            return ApiService.getErrorResponse(error);
        }
    };

    patch = async(path, data = []) => {
        try {
            const response = await axios.patch(
                this.getApiUrl(path),
                data,
                this.getHeaders()
            );
            return ApiService.getSuccessResponse(
                response.data,
                response.data.message
            );
        } catch (error) {
            return ApiService.getErrorResponse(error);
        }
    };

    put = async(path, data = []) => {
        try {
            const response = await axios.put(
                this.getApiUrl(path),
                data,
                this.getHeaders()
            );
            return ApiService.getSuccessResponse(
                response.data,
                response.data.message
            );
        } catch (error) {
            return ApiService.getErrorResponse(error);
        }
    };

    delete = async(path) => {
        try {
            const response = await axios.delete(
                this.getApiUrl(path),
                this.getHeaders()
            );
            return ApiService.getSuccessResponse(
                response.data,
                response.data.message
            );
        } catch (error) {
            return ApiService.getErrorResponse(error);
        }
    };

    getApiUrl = (path) => {
        if (process.env.REACT_APP_BACKEND_API_URL)
            return `${process.env.REACT_APP_BACKEND_API_URL}/${path}`;
        return "";
    };

    getHeaders = () => {
        const token = localStorage.getItem(AuthService.STORAGE_ACCESS_TOKEN) || "";
        return {
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
        };
    };

    getUploadHeaders = () => {
        const token = localStorage.getItem(AuthService.STORAGE_ACCESS_TOKEN) || "";
        return {
            headers: {
                ...(token && { Authorization: `Bearer ${token}` }),
                "Content-Type": "multipart/form-data",
            },
        };
    };

    static getSuccessResponse(
        responseData,
        message
    ) {
        return {
            data: responseData,
            success: true,
            message,
        };
    }

    static getErrorResponse(error) {
        const { status } = error.response;
        // if (status && status === 409) {
        //   window.location = "/logout" as any;
        // }

        return {
            error: error.response ? error.response.data.message : error.message,
            success: false,
        };
    }
}

export default ApiService;