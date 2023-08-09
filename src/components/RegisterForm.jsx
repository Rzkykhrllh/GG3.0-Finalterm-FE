import React, { useState, useEffect } from "react";

const RegisterForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    name: "",
  });

  const [errorMessage, seterrorMessage] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
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

  const validatePhoneNumber = (phone) => {
    if (!phone) {
      seterrorMessage((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number is required.",
      }));
    } else {
      const phoneNumberRegex = /^(?:\+62|0)[\s-]?(\d[\s-]?){9,11}$/;

      if (phoneNumberRegex.test(phone)) {
        seterrorMessage((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "",
        }));
      } else {
        seterrorMessage((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Invalid phone number format.",
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
    } else if (name === "phoneNumber") {
      setInput({ ...input, phoneNumber: value });
    } else if (name === "email") {
      setInput({ ...input, email: value });
    } else {
      setInput({ ...input, password: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateName(input.name);
    validatePhoneNumber(input.phoneNumber);
    ValidateEmail(input.email);
    validatePassword(input.password);

    if (
      !errorMessage.name &&
      !errorMessage.phoneNumber &&
      !errorMessage.email &&
      !errorMessage.password
    ) {
      // Api Call
      console.log("API CALL");
    }
  };

  useEffect(() => {}, [errorMessage]);

  return (
    <div className=" card card-bordered max-w-lg p-4 bg-white w-full">
      <h1 className="text-lg  text-center font-bold text-primary">
        Create Your Account
      </h1>

      <form className="form-control w-full" onSubmit={handleSubmit}>
        <div id="name-input">
          <label className="label">
            <span className="label-text font-bold text-[16px]">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-primary"
            onChange={handleChange}
            name="name"
          />
          <label className="label">
            {!!errorMessage.name && (
              <span className="label-text-alt text-red-400">
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
            className="input input-bordered w-full input-primary"
            onChange={handleChange}
            name="phoneNumber"
          />
          {!!errorMessage.phoneNumber && (
            <span className="label-text-alt text-red-400">
              {errorMessage.phoneNumber}
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
            className="input input-bordered w-full input-primary"
            onChange={handleChange}
          />
          <label className="label">
            {!!errorMessage.email && (
              <span className="label-text-alt text-red-400">
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
            className="input input-bordered w-full input-primary"
            onChange={handleChange}
          />
          <label className="label">
            {!!errorMessage.password && (
              <span className="label-text-alt text-red-400">
                {errorMessage.password}
              </span>
            )}
          </label>
        </div>

        <button className="btn btn-block btn-primary text-white" type="submit">
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
