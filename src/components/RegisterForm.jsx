import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import axios from "../core/api/axios";
const REGISTER_URL = `/api/register`;

const RegisterForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });

  const [errorMessage, seterrorMessage] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      seterrorMessage((prevErrors) => ({ ...prevErrors, email: "" }));
    } else {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        email: "Please Input Correct Email",
      }));
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 16) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        password: "Password length must be between 8 and 16 characters.",
      }));
    } else if (!/[a-z]/.test(password)) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        password: "Password must contain at least 1 lowercase letter.",
      }));
    } else if (!/[A-Z]/.test(password)) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        password: "Password must contain at least 1 uppercase letter.",
      }));
    } else if (!/\d/.test(password)) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        password: "Password must contain at least 1 digit.",
      }));
    } else {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  const validatePhone = (phone) => {
    if (!phone) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number is required.",
      }));
    } else {
      const phoneRegex = /^(?:\+62|0)[\s-]?(\d[\s-]?){9,11}$/;

      if (phoneRegex.test(phone)) {
        seterrorMessage((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      } else {
        seterrorMessage((prevErrors) => ({
          ...prevErrors,
          phone: "Invalid phone number format.",
        }));
      }
    }
  };

  const validateName = (name) => {
    if (!name) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        name: "Please enter your name",
      }));
    } else {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "phone") {
      setInput({ ...input, phone: value });
    } else if (name === "email") {
      setInput({ ...input, email: value });
    } else {
      setInput({ ...input, password: value });
    }
  };

  const register = async () => {
    try {
      const response = await axios.post(REGISTER_URL, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status == 201) {
        // Navigate to other
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

    validateName(input.name);
    validatePhone(input.phone);
    ValidateEmail(input.email);
    validatePassword(input.password);

    if (
      !errorMessage.name &&
      !errorMessage.phone &&
      !errorMessage.email &&
      !errorMessage.password
    ) {
      register();
    }
  };

  useEffect(() => {}, [errorMessage]);

  return (
    <div className="w-full max-w-lg p-4 bg-white card card-bordered">
      <h1 className="text-lg font-bold text-center text-primary">
        Create Your Account
      </h1>

      <form className="w-full form-control" onSubmit={handleSubmit}>
        <div id="name-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered input-primary"
            onChange={handleChange}
            name="name"
            required
          />
          <label className="label">
            {!!errorMessage.name && (
              <span className="text-red-400 label-text-alt">
                {errorMessage.name}
              </span>
            )}
          </label>
        </div>

        <div id="phone-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">
              Phone Number
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered input-primary"
            onChange={handleChange}
            name="phone"
            required
          />
          {!!errorMessage.phone && (
            <span className="text-red-400 label-text-alt">
              {errorMessage.phone}
            </span>
          )}
        </div>

        <div id="email-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered input-primary"
            onChange={handleChange}
            required
          />
          <label className="label">
            {!!errorMessage.email && (
              <span className="text-red-400 label-text-alt">
                {errorMessage.email}
              </span>
            )}
          </label>
        </div>

        <div id="password-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            className="w-full input input-bordered input-primary"
            onChange={handleChange}
            required
          />
          <label className="label">
            {!!errorMessage.password && (
              <span className="text-red-400 label-text-alt">
                {errorMessage.password}
              </span>
            )}
          </label>
        </div>

        <button className="text-white btn btn-block btn-primary" type="submit">
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
