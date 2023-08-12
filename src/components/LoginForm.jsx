import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../core/hooks/useAuth";

import { toast } from "react-toastify";

import axios from "../core/api/axios";
const LOGIN_URL = "/api/login";

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setInput({ ...input, email: value });
    } else {
      setInput({ ...input, password: value });
    }
  };

  const login = async () => {
    try {
      const response = await axios.post(LOGIN_URL, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        const { token, refreshToken } = response.data;
        console.log(response.data);

        setAuth({
          accessToken: token,
          refreshToken: refreshToken,
        });

        localStorage.setItem("accessToken", token);
        localStorage.setItem("refreshToken", refreshToken);

        navigate(from, { replace: true });
      }

      console.log(response);
    } catch (error) {
      console.log(error);
      const error_message = error?.response?.data?.message;

      toast.error(error_message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Api Call
    login();
  };

  return (
    <div className=" card card-bordered max-w-lg p-4 bg-white w-full">
      <h1 className="text-lg  text-center font-bold text-primary">
        Login to your account
      </h1>

      <form className="form-control w-full" onSubmit={handleSubmit}>
        <div id="email-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full input-primary"
            onChange={handleChange}
            required
          />
          <label className="label">
            {/* <span className="label-text-alt">Bottom Left label</span>
  <span className="label-text-alt">Bottom Right label</span> */}
          </label>
        </div>

        <div id="password-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full input-primary"
            onChange={handleChange}
            required
          />
          <label className="label">
            {/* <span className="label-text-alt">Bottom Left label</span>
  <span className="label-text-alt">Bottom Right label</span> */}
          </label>
        </div>

        <button className="btn btn-block btn-primary text-white" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
