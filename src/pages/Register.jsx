import React from "react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen  flex justify-center w-full">
      <div className="lg:w-1/2 md:w-3/5 flex flex-col items-center justify-center px-10">
        <RegisterForm />
      </div>

      <div className="lg:w-1/2 md:w-2/5  bg-[#F6F8FC]"></div>
    </div>
  );
};

export default Register;
