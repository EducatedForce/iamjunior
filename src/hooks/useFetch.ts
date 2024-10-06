import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Type for possible states of the hook
type UseFetchState<T> = {
	data: T | null;
	loading: boolean;
	error: string | null;
};

// Hook options for configuration (e.g., GET/POST, body, etc.)
type UseFetchOptions = AxiosRequestConfig;

//Define structure for error response
type ErrorResponse = {
	message?: string;
};

// useFetch Hook
export const useFetch = <T>(url: string, options?: UseFetchOptions) => {
	const [state, setState] = useState<UseFetchState<T>>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				setState((prevState) => ({ ...prevState, loading: true }));
				const response: AxiosResponse<T> = await axios(url, options);

				setState({
					data: response.data,
					loading: false,
					error: null,
				});
			} catch (error) {
				if (axios.isAxiosError(error)) {
					const axiosError = error as AxiosError<ErrorResponse>;
					setState({
						data: null,
						loading: false,
						error: axiosError.message || "Something went wrong",
					});
				} else {
					setState({
						data: null,
						loading: false,
						error: "Something went wrong",
					});
				}
			}
		};
		fetchData().catch((err) => console.error(err));

		// Cleanup: Cancel the request on unmount to
		// prevent state update for unmounted component
		const source = axios.CancelToken.source();
		return () => {
			source.cancel("Request cancelled");
		};
	}, [options, url]);

	return state;
};
