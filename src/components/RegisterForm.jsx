import React, { useState } from "react";

const RegisterForm = () => {
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

  const handleSubmit = (e) => {
    console.log("Gua kepanggil");
    // e.preventDefault();
    alert(input.email, input.password);
    // Api Call
  };
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
            {/* <span className="label-text-alt">Bottom Left label</span>
  <span className="label-text-alt">Bottom Right label</span> */}
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
          <label className="label">
            {/* <span className="label-text-alt">Bottom Left label</span>
  <span className="label-text-alt">Bottom Right label</span> */}
          </label>
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
            {/* <span className="label-text-alt">Bottom Left label</span>
  <span className="label-text-alt">Bottom Right label</span> */}
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
            {/* <span className="label-text-alt">Bottom Left label</span>
  <span className="label-text-alt">Bottom Right label</span> */}
          </label>
        </div>

        <btn className="btn btn-block btn-primary text-white" type="submit">
          Sign UP
        </btn>
      </form>
    </div>
  );
};

export default RegisterForm;
