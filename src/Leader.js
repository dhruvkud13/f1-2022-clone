import React from "react";
import charles from "./charles.png";
import carlos from "./carlos.png";
import max from "./max.png";
import monaco from "./monaco.png";
import dutch from "./dutch.png";
import spain from "./spain.png";

import Card from "./components/Card";
import Standings from './components/Standings';

const Leader = () => {
  return (
    <div>
      <div className="flex ml-5 text-black text-xl font-serif  justify-center">
        <button className=" mt-3 mb-3  border-4 border-b-red-600 text-red-600 border-l-transparent border-t-transparent border-r-transparent">
          DRIVERS
        </button>
        <button className="ml-10 mt-3 mb-3  hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
          CONSTRUCTORS
        </button>
        <button className="ml-10  mt-3 mb-3 mr-5 hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
          LAST RACE
        </button>
      </div>
      <div className="bg-gradient-to-r from-gray-400 to-gray-800 ">
        <div className=" text-center font-bold text-4xl pt-10 mb-10 text-white">
          <h1>2022 DRIVER STANDINGS</h1>
        </div>
        <div className="flex">
          <div className="w-1/5 "></div>
          <Card logo={spain} name="Carlos" surname="SAINZ" face={carlos} teamcolor="ferrari"/>
          <Card logo={monaco} name="Charles" surname="LECLERC" face={charles} teamcolor="ferrari" />
          <Card logo={dutch} name="Max" surname="VERSTAPPEN" face={max} teamcolor="redbull"/>
          <div className="w-1/5"></div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-white to-gray-400">
          <Standings position="1" name="Charles" surname="LECLERC" team="Ferrari" points="45 PTS" color="ferrari" />
        {/* <div className="flex">
          <div className="w-1/5"></div>
          <button className="w-3/5 ml-5 border-2 border-red-600 rounded-md hover:bg-black hover:text-white mb-1">
            <div className="flex justify-between">
              <div className="flex ">
                <div className="mt-1">2</div>

                <div className="pl-5 text-red-600 font-semibold mt-1">
                  Carlos
                </div>
                <div className="pl-2 font-bold text-lg mt-0.5">SAINZ</div>
                <span className="pl-5 mt-1">Ferrari</span>
              </div>

              <div className="flex justify-between">
                <button className="bg-gray-300 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2">
                  33 PTS
                </button>
                <div className="flex pl-5 mt-2">{">"}</div>
              </div>
            </div>
          </button>
          <div className="w-1/5"></div>
        </div> */}
        <Standings position="2" name="Carlos" surname="SAINZ" team="Ferrari" points="33 PTS"  color="ferrari"/>
        <Standings position="3" name="Max" surname="VERSTAPPEN" team="Red Bull Racing" points="25 PTS" color="redbull" />
        <Standings position="4" name="George" surname="RUSSELL" team="Mercedes" points="22 PTS" color="merc"/>
        <Standings position="5" name="Lewis" surname="HAMILTON" team="Mercedes" points="16 PTS" color="merc"/>
        <Standings position="6" name="Esteban" surname="OCON" team="Alpine" points="14 PTS" color="alpine"/>
        <Standings position="7" name="Sergio" surname="PEREZ" team="Red Bull Racing" points="12 PTS" color="redbull"/>
        <Standings position="8" name="Kevin" surname="MAGNUSSEN" team="Haas" points="12 PTS" color="haas"/>
        <Standings position="9" name="Valtteri" surname="BOTTAS" team="Alfa Romeo" points="8 PTS" color="alfa"/>
        <Standings position="10" name="Lando" surname="NORRIS" team="Mclaren" points="6 PTS"color="mclaren"/>
      </div>
      <div className="container mt-10 flex">
        <div className="w-1/5"></div>
        <div className="w-1/5"></div>
        <div className="w-1/5 ml-40">
        <button className="mb-10 bg-red-600 align-middle justify-center p-3 rounded-lg text-white text-xs border-4 hover:border-red-600 hover:bg-white hover:text-black border-transparent hover:font-semibold">
          VIEW FULL STANDINGS {">"}
        </button>
        </div>
        <div className="w-1/5"></div>
        <div className="w-1/5"></div>
      </div>
    </div>
  );
};

export default Leader;
