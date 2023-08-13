import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 text-center bg-[rgba(0,0,0,0.8)]  flex justify-center flex-col z-50">
      <div className=" text-2xl text-black w-fit card   mx-auto opacity-100 p-4 ">
        {/* Loading */}
        <HashLoader
          color={"#ffffff"}
          loading={true}
          size={36}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="inline-block"
        />
      </div>
    </div>
  );
};

export default Loading;
