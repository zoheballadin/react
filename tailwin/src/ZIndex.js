import React from "react";

export const ZIndex = () => {
  return (
    <div>
      <div className="h-screen text-white bg-slate-900 Parent">
        <div className="container flex">
          <div className="z-40 bg-red-500 p-3 rounded-full border border-white hover:bg-slate-400">05</div>
          <div className="z-30 bg-red-500 p-3 rounded-full border border-white">04</div>
          <div className="z-20 bg-red-500 p-3 rounded-full border border-white">03</div>
          <div className="z-10 bg-red-500 p-3 rounded-full border border-white">02</div>
          <div className="z-0 bg-red-500 p-3 rounded-full border border-white">01</div>
        </div>
      </div>
    </div>
  );
};
