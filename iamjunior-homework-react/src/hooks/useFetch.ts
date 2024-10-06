import {useState} from 'react';
import {ApiResponse, mockApiCall} from "../lib/mockApiCall.ts";


// useFetch Hook
export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<object | null>(null);

  const fetchData = async (url: string, method: string, body: object) => {
    setLoading(true);
    setError(null);

    if (method) {
      try {
        const response: ApiResponse = await mockApiCall(url, body);
        setData(response);

        // Save user data to localStorage if response is successful
        if (response.success && response.user) {
          localStorage.setItem("userServiceApp", JSON.stringify(response.user));
        } else {
          setError(response.message || 'An error occurred');
        }

      } catch (err) {
        setError((err as ApiResponse).message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
  };

  return {fetchData, loading, error, data};
};
