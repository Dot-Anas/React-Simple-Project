import React from 'react'
import InstanceItem from "./InstanceItem";

function ActiveInstances({activeServices}) {
  return (
    <div className='border-2 rounded-lg border-blue-300/80 bg-blue-200 p-2 flex justify-evenly flex-wrap gap-3 w-fit'>
        {
            activeServices.length===0?(<div className='p-5 bg-amber-100'>please Launch Service</div>):(activeServices.map((e)=>(<InstanceItem header={e.header} ram={e.ram} key={e.id}/>)))
        }

    </div>
  )
}

export default ActiveInstances