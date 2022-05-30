import ApiService from "./ApiService";

class UsersService {
    apiService = new ApiService();

    getUsers = async() => {
        const response = await this.apiService.get(`administrators/users`);
        if (!response.success) throw response.error;
        return response.data;
    };
    getPromotions = async() => {
        const response = await this.apiService.get(`cafeteria-manager/promotions`);
        if (!response.success) throw response.error;
        return response.data;
    };

    getUserById = async(id) => {
        const response = await this.apiService.get(`users/${id}`);
        if (!response.success) throw response.error;
        return response.data;
    };

    deleteUser = async(id) => {
        const response = await this.apiService.delete(`administrators/users/${id}`);
        if (!response.success) throw response.error;
        return response.data;
    };

    deletePromotion = async(id) => {
        const response = await this.apiService.delete(`cafeteria-manager/promotions/${id}`);
        if (!response.success) throw response.error;
        return response.data;
    };
    createUser = async(user) => {
        const response = await this.apiService.post(`administrators/users/`, user);
        if (!response.success) throw response.error;
        return response.data;
    };

    createPromotion = async(promotion) => {
        const response = await this.apiService.post(`cafeteria-manager/promotions/`, promotion);
        if (!response.success) throw response.error;
        return response.data;
    };



    login = async({
        email,
        password,
    }) => {
        const response = await this.apiService.post(`auth/login`, {
            email,
            password,
        });
        if (!response.success) throw response.error;
        return response.data;
    };

    updateUserInfo = async(
        userInfo
    ) => {
        const response = await this.apiService.put(`administrators/users/${userInfo.id}`, userInfo);
        if (!response.success) throw response.error;
        return response.data;
    };
}

export default UsersService;