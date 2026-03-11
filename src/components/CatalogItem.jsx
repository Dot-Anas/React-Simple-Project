import React from "react";

function CatalogItem({ header, info ,onClick}) {
  return (
    <div className="w-80 p-3 border-2 border-blue-300/80 rounded-lg shadow-lg shadow-blue-300/80 bg-[#dde9f5] flex gap-4 items-center justify-between">
      <div className="font-semibold">
        <h2>{header}</h2>
        <p>{info}</p>
      </div>
      <button onClick={onClick} className="hover:bg-[#e67300] bg-[#FF851B] px-3 py-1 rounded-sm cursor-pointer text-white font-semibold">
        LAUNCH
      </button>
    </div>
  );
}

export default CatalogItem;
