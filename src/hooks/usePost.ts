import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

// Define structure for error response
type ErrorResponse = {
	message?: string;
};

export const usePost = <T, TData = unknown>(
	url: string,
	options?: AxiosRequestConfig,
	mutationOptions?: UseMutationOptions<T, ErrorResponse, TData>,
): UseMutationResult<T, ErrorResponse, TData> => {
	return useMutation<T, ErrorResponse, TData>({
		mutationFn: async (postData: TData) => {
			const response = await axios.post(url, postData, options);
			return response.data;
		},
		...mutationOptions,
	});
};
