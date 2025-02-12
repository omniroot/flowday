// import { authApi } from "@/shared/services/auth/auth.api.ts";
import axios from "axios";

export const api = axios.create({
	baseURL: "http://192.168.1.34:10001/",
	headers: {
		// "User-Agent": CONSTS.USER_AGENT,
		"Content-Type": "application/json",
	},
});

// api.interceptors.request.use(
// 	(config) => {
// 		// Получаем access token из local storage
// 		const token = localStorage.getItem("access_token");

// 		// Если токен существует, добавляем его в заголовки запроса
// 		if (token) {
// 			// Убедимся, что headers определены
// 			config.headers = {
// 				...config.headers,
// 				Authorization: `Bearer ${token}`,
// 			} as AxiosRequestHeaders;
// 		}

// 		return config;
// 	},
// 	(error) => {
// 		// Обработка ошибок запроса
// 		return Promise.reject(error);
// 	},
// );

// api.interceptors.response.use(
// 	(response: AxiosResponse) => {
// 		console.log(response);
// 		return response;
// 	},
// 	async (error) => {
// 		const originalRequest = error.config;

// 		if (
// 			error.response &&
// 			error.response.status === 401 &&
// 			!originalRequest._retry &&
// 			localStorage.getItem("refresh_token")
// 		) {
// 			originalRequest._retry = true;
// 			console.log("Trying refreshing tokens");
// 			const tokens = await authApi.refreshTokens(localStorage.getItem("refresh_token") || "");
// 			console.log("Tokens: ", tokens);

// 			if (tokens) {
// 				localStorage.setItem("access_token", tokens.access_token);
// 				localStorage.setItem("refresh_token", tokens.refresh_token);
// 			}
// 			return api(originalRequest);
// 		}
// 		return Promise.reject(error);
// 	},
// );
