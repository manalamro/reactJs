import ApiService from "./ApiService";

class AuthService {
    STORAGE_ACCESS_TOKEN = "accessToken";

    apiService = new ApiService();

    setAccessToken = (token) => {
        localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, token);
    };

    getAccessToken = () => {
        return localStorage.getItem(AuthService.STORAGE_ACCESS_TOKEN);
    };

    removeAccessToken = () => {
        return localStorage.removeItem(AuthService.STORAGE_ACCESS_TOKEN);
    };

    logIn = async(email, password) => {
        const response = await this.apiService.post("auth/login", {
            email,
            password,
        });
        if (!response.success) throw response.error;
        return { data: response.data, message: response.message };
    };

    signUp = async(userInfo) => {
        const response = await this.apiService.post("auth/signup", userInfo);
        if (!response.success) throw response.error;
        return { data: response.data, message: response.message };
    };

    forgotPassword = async(email) => {
        const response = await this.apiService.post("auth/reset", {
            email,
        });
        if (!response.success) throw response.error;
        return { data: response.data, message: response.message };
    };

    resetPassword = async({
        email,
        code,
        password,
        confirmPassword,
    }) => {
        const response = await this.apiService.post("auth/change-password", {
            email,
            resetCode: code,
            password,
            confirmPassword,
        });
        if (!response.success) throw response.error;
        return { data: response.data, message: response.message };
    };

    confirmCode = async(email, code) => {
        const response = await this.apiService.post("auth/confirm-code", {
            email,
            resetCode: code,
        });
        if (!response.success) throw response.error;
        return { data: response.data, message: response.message };
    };
}

export default AuthService;