import {useState} from 'react';
import {users} from "../lib/users.ts";

export interface ApiResponse {
  success: boolean;
  user?: {
    id: string;
    username: string;
    email: string;
    token: string;
  };
  message?: string;
}

// Mock API call to mimic an async API request
const mockApiCall = (url: string, data: object): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('login')) {
        const existingUser = users.find((user) => user.email === (data as User).email && user.token === (data as User).token);
        if (existingUser) {
          resolve({
            success: true,
            user: {
              id: existingUser.id,
              username: existingUser.username,
              email: existingUser.email,
              token: existingUser.token,
            }
          });
        } else {
          reject({success: false, message: 'Email or password incorrect'});
        }
      } else {
        reject({success: false, message: 'Invalid URL or request'});
      }
    }, 1000); // Simulate a network delay of 1 second
  });
};

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
