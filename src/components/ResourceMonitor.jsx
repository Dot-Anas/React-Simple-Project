import React from "react";

function ResourceMonitor({ useage = 0 }) {
  const countUsage = () => {
    return Math.round((useage / 64) * 100);
  };

  return(  
    <div className="p-4 flex flex-col font-bold w-fit">
        <div>{useage}GB / 64GB</div>
        <div className="flex items-center w-100 border rounded-full h-6 overflow-hidden ">
            <div style={{width: `${countUsage()}%`}} className="bg-red-600 rounded-full h-full"></div>
        </div>
    </div>
)
}

export default ResourceMonitor;
