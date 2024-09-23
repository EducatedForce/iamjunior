import {create} from "zustand";
import {ApiResponse, mockApiCall} from "../lib/mockApiCall.ts";


interface State {
  user: User;
  isLoading: boolean;
  error: string;
}

type Action = {
  updateUserName: (userName: State["user"]["userName"]) => void,
  updateEmail: (email: State["user"]["email"]) => void,
  updateToken: (token: State["user"]["token"]) => void,
  updateIsAdmin?: (isAdmin: State["user"]["isAdmin"]) => void,
  getUser: (email: string, token: string) => Promise<{
    response: ApiResponse
  } | undefined>
}

export const useUserStore = create<State & Action>((set) => ({
  user: {
    id: "",
    userName: "",
    email: "",
    token: "",
    isAdmin: false,
  },
  isLoading: false,
  error: "",
  updateUserName: (userName) => set((state) => ({
    user: {
      ...state.user,
      userName: userName
    }
  })),
  updateEmail: (email) => set((state) => ({
    user: {
      ...state.user,
      email: email,
    }
  })),
  updateToken: (token) => set((state) => ({
    user: {
      ...state.user,
      token: token,
    }
  })),
  updateIsAdmin: (isAdmin) => set((state) => ({
    user: {
      ...state.user,
      isAdmin: isAdmin
    }
  })),
  getUser: async (email, token) => {
    try {
      set(() => ({isLoading: true}));
      const fetchData = await mockApiCall("api/login", {
        userName: email as User["email"],
        email: token as User["token"],
      });
      set((state) => ({
        user: {...state.user, ...fetchData?.user},
        isLoading: false,
        error: "",
      }));

      return {response: fetchData};
    } catch (err) {
      console.log(err);
      set(() => ({error: (err as ApiResponse).message || 'An error occurred'}));
      set(() => ({isLoading: false}));
    }
  }
}));
