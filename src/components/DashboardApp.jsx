import React, { useState } from "react";
import ServiceCatalog from "./ServiceCatalog";
import ActiveInstances from "./ActiveInstances";
import ResourceMonitor from "./ResourceMonitor";
function DashboardApp() {
  const [activeService, setService] = useState([]);

  const addNewActiveService = (serviceObj) => {
    const newService = {
      ...serviceObj,
      id: crypto.randomUUID(),
      ram: 2,
    };
    setService((pre) => [...pre, newService]);
  };
  const countRam = () => {
   return activeService.reduce((acc, curr) => {
    console.log(acc,curr)
        return acc + curr.ram;
      }, 0);
  };
  return (
    <div>
      <ServiceCatalog onLaunchService={addNewActiveService} />
      <ActiveInstances activeServices={activeService} />
      <ResourceMonitor useage={countRam()} />
    </div>
  );
}

export default DashboardApp;
