import React from "react";

function InstanceItem({ header, ram }) {
  return (
    <div className="rounded-lg border-2 border-blue-300/80 bg-blue-200 flex flex-col shadow-sm gap-3  w-fit p-2 font-bold">
      <h2>{header} instance</h2>
      <div className="flex gap-5 justify-center items-center">
        <div className="flex-1">{ram}GB RAM</div>
        <div className="flex-1 flex gap-2">
          <button className="bg-blue-400 p-2 w-10 h-10 rounded-sm cursor-pointer">+</button>
          <button className="bg-blue-400 p-2 w-10 h-10 rounded-sm cursor-pointer">-</button>
        </div>
      </div>
    </div>
  );
}

export default InstanceItem;
