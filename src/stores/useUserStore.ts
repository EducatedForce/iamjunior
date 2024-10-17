import { create } from "zustand";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { apiRoutes } from "../lib/apiRoutes.ts";

interface UserData extends User {
	accessToken: string;
}

interface UserState extends UserData {
	isLoading: boolean;
	error: string;
	login: (email: string, password: string) => Promise<void>;
	register: (
		userName: string,
		email: string,
		password: string,
	) => Promise<void>;
	logout: () => void;
	loadUserFromLocalStorage: () => void;
}

interface UserJwtPayload extends User, JwtPayload {}

//Helper function to decode JWT Token
export const decodeAccessToken = (accessToken: string) => {
	return jwtDecode<UserJwtPayload>(accessToken);
};

// Helper function to save user data to localStorage
const saveUserToLocalStorage = (user: UserData) => {
	localStorage.setItem("userServiceApp", JSON.stringify(user));
};

// Helper function to remove user data from localStorage
const clearUserFromLocalStorage = () => {
	localStorage.removeItem("userServiceApp");
};

// Helper function to get user data from localStorage
const getUserFromLocalStorage = () => {
	const user = localStorage.getItem("userServiceApp");
	return user ? JSON.parse(user) : null;
};

export const useUserStore = create<UserState>((set) => ({
	_id: "",
	userName: "",
	email: "",
	accessToken: "",
	isLoading: false,
	error: "",

	// Login action
	login: async (email: string, password: string) => {
		set({ isLoading: true, error: "" });
		try {
			const response = await axios.post(`${apiRoutes.login}`, {
				email,
				password,
			});
			const { token: accessToken } = response.data;
			const user = decodeAccessToken(accessToken);
			saveUserToLocalStorage({
				_id: user._id,
				userName: user.userName,
				email: user.email,
				accessToken: accessToken,
			});
			set({
				_id: user._id,
				userName: user.userName,
				email: user.email,
				accessToken: accessToken,
				isLoading: false,
				error: "",
			});
		} catch (error) {
			if (axios.isAxiosError(error)) {
				set({
					isLoading: false,
					error: error.response?.data?.message || "Login failed",
				});
			} else {
				set({
					isLoading: false,
					error: "Login failed",
				});
			}
		}
	},

	// Register action
	register: async (userName: string, email: string, password: string) => {
		set({ isLoading: true, error: "" });
		try {
			const response = await axios.post(`${apiRoutes.register}`, {
				userName,
				email,
				password,
			});
			const { token: accessToken } = response.data;
			const user = decodeAccessToken(accessToken);
			saveUserToLocalStorage({
				_id: user._id,
				userName: user.userName,
				email: user.email,
				accessToken: accessToken,
			});
			set({
				_id: user._id,
				userName: user.userName,
				accessToken: accessToken,
				isLoading: false,
				error: "",
			});
		} catch (error) {
			if (axios.isAxiosError(error)) {
				set({
					isLoading: false,
					error: error.response?.data?.message || "Registration failed",
				});
			} else {
				set({
					isLoading: false,
					error: "Registration failed",
				});
			}
		}
	},

	// Logout action
	logout: () => {
		clearUserFromLocalStorage();
		set({
			_id: "",
			userName: "",
			accessToken: "",
			error: "",
		});
	},
	loadUserFromLocalStorage: async () => {
		const user = await getUserFromLocalStorage();
		if (user) {
			set({
				_id: user._id,
				userName: user.userName,
				email: user.email,
				accessToken: user.accessToken,
				isLoading: false,
				error: "",
			});
		}
	},
}));
