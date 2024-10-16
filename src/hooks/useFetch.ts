import {
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

//Define structure for error response
type ErrorResponse = {
	message?: string;
};

// useFetch Hook with integrated React Query functionality
export const useFetch = <T>(
	url: string | null,
	options?: AxiosRequestConfig,
	queryOptions?: UseQueryOptions<T, ErrorResponse>,
): UseQueryResult<T, ErrorResponse> => {
	return useQuery<T, ErrorResponse>({
		queryKey: [url, options],
		queryFn: async () => {
			if (!url) {
				return Promise.reject({ message: "No URL provided" } as ErrorResponse);
			}
			const response = await axios(url, options);
			return response.data;
		},
		...queryOptions,
		retry: 2,
		staleTime: 5000,
		refetchOnWindowFocus: false,
	});
};
