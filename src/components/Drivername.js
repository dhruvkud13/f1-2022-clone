import React, { useRef, useEffect } from "react";

const Drivername = ({ number, color, name, surname }) => {
  const bordcolor = useRef(null);
  const teamcolor = useRef(null);
  useEffect(() =>{
    color==="williams" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-blue-400 hover:border-t-transparent hover:border-l-transparent" :  
      (color==="alpine" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-blue-700 hover:border-t-transparent hover:border-l-transparent":
        (color==="alfa" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-red-800 hover:border-t-transparent hover:border-l-transparent":
          (color==="alpha" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-blue-200 hover:border-t-transparent hover:border-l-transparent":
            (color==="merc" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-green-300 hover:border-t-transparent hover:border-l-transparent":
              (color==="ferrari" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-red-600 hover:border-t-transparent hover:border-l-transparent":
                (color==="haas" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-gray-600 hover:border-t-transparent hover:border-l-transparent":
                    (color==="mclaren" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-orange-400 hover:border-t-transparent hover:border-l-transparent":
                        (color==="redbull" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-blue-900 hover:border-t-transparent hover:border-l-transparent":
                            (color==="aston" ? bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-green-800 hover:border-t-transparent hover:border-l-transparent":
                                bordcolor.current.className="border-2 border-gray-300 border-l-transparent border-t-transparent  rounded-md hover:border-blue-700 hover:border-t-transparent hover:border-l-transparent")))))))))
  })

  useEffect(() =>{
    color==="williams"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-blue-400":
        (color==="alpine"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-blue-700":
            (color==="alfa"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-red-800":
                (color==="alpha"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-blue-200":
                    (color==="merc"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-green-300":
                        (color==="ferrari"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-red-600":
                            (color==="haas"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-gray-600":
                                (color==="mclaren"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-orange-400":
                                    (color==="redbull"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-blue-900":
                                        (color==="aston"? teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-green-800":
                                            teamcolor.current.className="pl-2 mt-0.5 border-l-4 border-blue-400")))))))))
  })
  return (
    <div ref={bordcolor}>
      <button className=" mt-3 pr-2  pb-2">
        <div className="flex justify-between items-center">
          <div className="flex ">
            <div className=" mx-14">{number}</div>

            <div ref={teamcolor}>
              {name}
            </div>
            <div className="mt-0.5 pl-2 font-bold text-md">{surname}</div>
            <div className="pl-5 mt-1"></div>
          </div>

          <div className="flex justify-between">
            <div className="flex pl-5 mt-0">{">"}</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Drivername;
