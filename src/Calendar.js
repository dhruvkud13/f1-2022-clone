import React from "react";
import bahrain from "./calendar/bahrain.jpg";
import jeddah from "./calendar/jeddah.jpg";
import australia from "./calendar/australia.jpg";
import imola from "./calendar/imola.jpg";
import miami from "./calendar/miami.jpg";
import baku from "./calendar/baku.jpg";
import monaco from "./calendar/monaco.jpg";
import rolex from "./calendar/rolex.jfif";
import rolexnew from "./calendar/rolexnew.png";
import {BsFillCalendarPlusFill} from 'react-icons/bs';

const Calendar = () => {
  return <div>
      <div className="flex bg-black pt-10 text-white mb-5">
          <div className="w-1/6 ml-20 pt-40">
            <img src={bahrain} alt="hi"></img>
            <div className="col-span-4">
              <div className="mt-5 text-gray-400 font-bold text-2xl ">BAHRAIN </div>
              <div className=" text-gray-400 font-bold text-2xl ">GP</div>
              <div className="mb-2 text-5xl font-bold">20</div>
              <div className="font-bold text-1xl text-gray-400">MAR</div>
            </div>
          </div>
          <div className="w-1/6 pt-40">
            <img src={jeddah} alt="hi"></img>
            <div className="col-span-3">
              <div align="left" className="mt-5 pr-5 text-gray-400 font-bold text-2xl ">SAUDI ARABIA GP</div>
              <div className="mb-2 text-5xl font-bold">27</div>
              <div className="font-bold text-1xl text-gray-400">MAR</div>
            </div>
          </div>
          <div className="w-1/6 pt-40">
            <img src={australia} alt="hi"></img>
            <div className="col-span-3">
              <div align="left" className="mt-5 text-gray-400 font-bold text-2xl ">AUSTRALIA</div>
              <div className=" text-gray-400 font-bold text-2xl ">GP</div>
              <div className="mb-2 text-5xl font-bold">10</div>
              <div className="font-bold text-1xl text-gray-400">APR</div>
            </div>
          </div>
          <div className="w-2/6 mr-14 ">
            <img src={imola} alt="hi" className=" ml-24 pl-7" ></img>
            <div align="center" className=" text-2xl mt-5 text-gray-400 font-bold">ITALY</div>
            <div align="center" className="text-2xl mt-2 font-bold">FORMULA 1 ROLEX GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2022</div>
            <div align="center" className="text-gray-400 font-bold mt-2"> 22 APR 2022 - 24 APR 2022 </div>
            <div className="flex bg-green-900 mt-5">
            <img src={rolexnew} alt="imola" width="125" height="100"></img>
            <img src={rolex} alt="imola" width="110" height="100"></img>
            <div className="ml-5 col-span-4" align="center">
            <div className=" font-bold text-gray-400">Imola</div>
            <div className=" font-bold text-gray-400">21:31</div>
            <div className=" ">Your Time</div>
            <div>01:01</div>
            </div>
            </div>
            <div className="flex mt-5 mb-5">
              {/* <div className="row-span-2"> */}
              {/* <BsFillCalendarPlusFill /> */}
              <button className="w-1/2  rounded-lg border-2 mr-5">SYNC CALENDAR</button>
              {/* </div> */}
              <button className="w-1/2 rounded-lg border-2">CONVERT TO TRACK TIME</button>
            </div>
            <div className="flex" align="center">
              <div className="col-span-3 w-1/2">
                <div>PRACTICE 1 <span className="text-gray-400 text-sm">FRI</span> <div className="bg-gray-400 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2 mr-5 ml-5">17:00-18:00</div></div>
                <div>QUALIFYING <span className="text-gray-400 text-sm">FRI</span> <div className="bg-gray-400 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2 mr-5 ml-5">20:30-21:30</div></div>
                <div className="mb-10">PRACTICE 2 <span className="text-gray-400 text-sm">SAT</span> <div className="bg-gray-400 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2 mr-5 ml-5">16:00-17:00</div></div>
              </div>
              <div className="w-1/2 col-span-2">
            <div>SPRINT RACE <span className="text-gray-400 text-sm">SAT</span> <div className="bg-gray-400 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2 mr-5 ml-5">20:00-21:00</div></div>
                <div>MAIN RACE <span className="text-gray-400 text-sm">SUN</span> <div className="bg-gray-400 border-2 rounded-lg pl-2 pr-2 mt-2 mb-2 mr-5 ml-5">18:30</div></div>
            </div>
            </div>
            
          </div>
          <div className="w-1/6 pt-40">
            <img src={miami} alt="hi"></img>
            <div className="col-span-3">
              <div align="left" className="mt-5 text-gray-400 font-bold text-2xl ">UNITED STATES GP</div>
              <div className="mb-2 text-5xl font-bold">8</div>
              <div className="font-bold text-1xl text-gray-400">MAY</div>
            </div>
          </div>
          <div className="w-1/6 pt-40">
            <img src={monaco} alt="hi"></img>
            <div className="col-span-3">
              <div align="left" className="mt-5 text-gray-400 font-bold text-2xl ">MONACO</div>
              <div className=" text-gray-400 font-bold text-2xl ">GP</div>
              <div className="mb-2 text-5xl font-bold">29</div>
              <div className="font-bold text-1xl text-gray-400">MAY</div>
            </div>
          </div>
          <div className="w-1/6 pt-40">
            <img src={baku} alt="hi"></img>
            <div className="col-span-3">
              <div align="left" className="mt-5 text-gray-400 font-bold text-2xl ">AZERBAIJAN</div>
              <div className=" text-gray-400 font-bold text-2xl ">GP</div>
              <div className="mb-2 text-5xl font-bold">12</div>
              <div className="font-bold text-1xl text-gray-400">JUN</div>
            </div>
          </div>
      </div>
  </div>;
};

export default Calendar;