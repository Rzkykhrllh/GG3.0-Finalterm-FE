import React, { useState } from "react";

const LoginForm = () => {
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
    e.preventDefault();
    alert(input.email, input.password);
    // Api Call
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
