import {users} from "./users.ts";

export interface ApiResponse {
  success: boolean;
  user?: {
    id: string;
    userName: string;
    email: string;
    token: string;
    isAdmin?: boolean;
  };
  message?: string;
}

// Mock API call to mimic an async API request
export const mockApiCall = (url: string, data: object): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('login')) {
        const existingUser = users.find((user) => user.email === (data as User).email && user.token === (data as User).token);
        if (existingUser) {
          resolve({
            success: true,
            user: {
              id: existingUser.id,
              userName: existingUser.userName,
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
