import React from "react";

export const Position = () => {
  return (
    <div className="text-white Parent bg-slate-900 h-screen">
      <div className="container px-2 ">
        <div className="relative w-32 h-32 bg-red-500 rounded-lg p-8">
            <div className="w-24 h-24 bg-green-500 absolute inset-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
