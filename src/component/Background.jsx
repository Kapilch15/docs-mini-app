import React from "react";

const Background = () => {
  return (
    <div className="fixed z-2 w-full h-screen">
      <div className="absolute w-full flex justify-center items-center top-[10%] text-zinc-500 font-semibold py-10 text-xl">
        Documents
      </div>
      <h1 className="text-[12vw] text-zinc-400 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold leading-none tracking-tighter">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
