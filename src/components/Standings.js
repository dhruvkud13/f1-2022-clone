import React, {useRef,useEffect} from "react";

const Standings = ({position, name, surname, team, points, color }) => {
  const bordcolor = useRef(null);
  const namecolor = useRef(null);

  useEffect(() =>{
    color==="ferrari" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-red-600" :  
      (color==="redbull" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-blue-900":
        (color==="merc" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-green-400":
          (color==="mclaren" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-5 border-orange-400":
            (color==="alpine" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-blue-700":
              (color==="haas" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-gray-600":
                (color==="alfa" ? bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-red-800":
                  bordcolor.current.className="w-3/5 ml-5 border-2 rounded-md hover:bg-black hover:text-white mt-5 mb-1 border-pink-300"))))))
  })

  useEffect(() =>{
    color==="ferrari"? namecolor.current.className="pl-5 text-red-600 font-semibold mt-1":
      (color==="redbull"? namecolor.current.className="pl-5 text-blue-900 font-semibold mt-1":
        (color==="merc"? namecolor.current.className="pl-5 text-green-400 font-semibold mt-1":
          (color==="mclaren"? namecolor.current.className="pl-5 text-orange-400 font-semibold mt-1":
            (color==="alpine"? namecolor.current.className="pl-5 text-blue-700 font-semibold mt-1":
              (color==="haas"? namecolor.current.className="pl-5 text-gray-600 font-semibold mt-1":
                (color==="alfa"? namecolor.current.className="pl-5 text-red-800 font-semibold mt-1":
                  namecolor.current.className="pl-5 text-red-600 font-semibold mt-1"))))))
  })
  return (
    <div className="flex">
      <div className="w-1/5"></div>
      <button ref={bordcolor}>
        <div className="flex justify-between">
          <div className="flex ">
            <div className="mt-1">{position}</div>

            <div ref={namecolor}>{name}</div>
            <div className="pl-2 font-bold text-lg mt-0.5">{surname}</div>
            <span className="pl-5 mt-1">{team}</span>
          </div>

          <div className="flex justify-between">
            <button className="bg-gray-300 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2">
              {points}
            </button>
            <div className="flex pl-5 mt-2">{">"}</div>
          </div>
        </div>
      </button>

      <div className="w-1/5"></div>
    </div>
  );
};

export default Standings;
