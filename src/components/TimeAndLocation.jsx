import React from "react"

function TimeAndLocation({weather: {dt, timezone, name, country}})
{
  return <div>
    <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
            Tuesday, 31 May 2022 | Local time: 12:46 PM
        </p>
    </div>
    <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-medium">{`${name}, ${country}`}</p>
    </div>
  </div>
  
}

export default TimeAndLocation