import React from "react";
import CatalogItem from "./CatalogItem";
function ServiceCatalog({onLaunchService}) {
  let ser = [
    { header: "Database", info: 1 },
    { header: "Web Server", info: 2 },
    { header: "AI Engine", info: 3 },
    { header: "Backup Node", info: 4 },
  ];
  return (
    <div className="border-2 border-blue-300/80 bg-blue-200 w-fit rounded-lg shadow-xl flex flex-col">
      <h2 className="p-2 font-bold border-b-2 border-blue-300 text-center">
        SERVICE CATALOG
      </h2>
      <div className="p-2 flex flex-col gap-2">
        {ser.map((e) => (
          <CatalogItem onClick={()=>onLaunchService(e)} header={e.header} info={e.info} key={e.header} />
        ))}
      </div>
    </div>
  );
}

export default ServiceCatalog;
