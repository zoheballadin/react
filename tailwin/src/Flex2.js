import React from "react";

export const Flex2 = () => {
  return (
    <div>
      <div>Header</div>
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-32 bg-sky-500">Sidebar</div>
        <div className="bg-red-600 w-full">Main Content</div>
      </div>
      <div className="flex w-full flex-wrap">
        <div className="w-32 grow">1</div>
        <div className="w-32 grow">2</div>
        <div className="w-32 grow">3</div>
        <div className="w-32 grow">1</div>
        <div className="w-32 grow">2</div>
        <div className="w-32 grow">3</div>
      </div>
    </div>
  );
};
