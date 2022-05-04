import React,{useRef,useEffect} from "react";
import charles from "../charles.png";
import monaco from '../monaco.png'

const Card = ({logo,name,surname,face,teamcolor}) => {
  const bordcolor = useRef(null);

  useEffect(() =>{
    bordcolor.current.className= teamcolor==="ferrari" ? 
    "w-1/5 ml-5 container border-4 rounded-lg bg-white mb-10 border-red-600" :  
    "w-1/5 ml-5 container border-4 rounded-lg bg-white mb-10 border-blue-800";
  })

  return (
    <div ref={bordcolor}>
            <img className="w-full" src={face} alt="charles" />
            <div className="bg-gray-700 text-white">
              <div className="flex ">
                <div className="flex mt-3 pl-3 text-xl font-semibold">
                  {name}
                  <img src={logo} alt="monaco" className="pl-2 w-2/6" />
                </div>
              </div>
              <div className="pl-3 text-3xl font-bold">{surname}</div>
            </div>
          </div>
  );
};

export default Card;
