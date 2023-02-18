import React from "react";

export const FlexJustify = () => {
  return (
    <div>
      <div>Header</div>
      <div className="flex justify-evenly items-center">
        <div>Sidebar</div>
        <div>
          <h1 className="font-bold text-2xl">Main content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur quaerat, dicta omnis sapiente voluptatum quod autem hic
            rerum! Debitis tempora saepe ut est totam blanditiis ab voluptatum,
            consequatur nobis optio!
          </p>
        </div>
        <div>Main content</div>
      </div>
      <div class="flex items-baseline  ...">
  <div className="pt-2 grow pb-6 bg-sky-500">01</div>
  <div className="pt-8 grow pb-12 bg-red-600">02</div>
  <div className="pt-12 grow pb-4 bg-green-500">03</div>
</div>
    </div>
  );
};
