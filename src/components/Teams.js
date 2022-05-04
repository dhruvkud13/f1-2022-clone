import {React, useEffect, useRef} from 'react'

const Teams = ({name,color,car}) => {
    const teamcolor = useRef(null);
    useEffect(() =>{
        color==="williams"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-blue-400 hover:border-t-transparent hover:border-l-transparent":
            (color==="alpine"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-blue-700 hover:border-t-transparent hover:border-l-transparent ":
                (color==="alfa"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-red-800 hover:border-t-transparent hover:border-l-transparent ":
                    (color==="alpha"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-blue-200 hover:border-t-transparent hover:border-l-transparent ":
                        (color==="merc"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-green-300 hover:border-t-transparent hover:border-l-transparent ":
                            (color==="ferrari"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-red-600 hover:border-t-transparent hover:border-l-transparent ":
                                (color==="haas"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-gray-600 hover:border-t-transparent hover:border-l-transparent ":
                                    (color==="mclaren"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-orange-400 hover:border-t-transparent hover:border-l-transparent ":
                                        (color==="redbull"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-blue-900 hover:border-t-transparent hover:border-l-transparent ":
                                            (color==="aston"? teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-green-800 hover:border-t-transparent hover:border-l-transparent ":
                                                teamcolor.current.className="text-left border-2 border-l-transparent border-t-transparent border-gray-300 rounded-md hover:border-red-800 hover:border-t-transparent hover:border-l-transparent")))))))))
      })
  return (
    <button ref={teamcolor}>
    <div>{name} {">"}</div>
    <img className="w-full" src={car} alt="alfa" />
  </button>
  )
}

export default Teams