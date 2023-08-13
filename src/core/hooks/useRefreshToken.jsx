import React from "react";
import axios from "../api/axios";

import useAuth from "./useAuth";

const REFRESH_URL = "/api/refresh";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.post(
        REFRESH_URL,
        {
          refreshToken: auth?.refreshToken,
        },
        {
          withCredential: true,
        }
      );
      console.log(response);

      setAuth((prev) => {
        console.log(prev);
        return { ...prev, accessToken: response?.data?.token };
      });

      localStorage.setItem("accessToken", response?.data?.token);

      return response.data.token;
    } catch (error) {
      console.log(error);
    }
  };

  return refresh;
};

export default useRefreshToken;
