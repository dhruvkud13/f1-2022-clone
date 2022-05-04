import React, { useState } from "react";
import "./Bar.css";
import f1logo from "../src/fia logos/f1-final.png";
import ocon from "./latest news/ocon.jpg";
import zhou from "./latest news/zhou.jpg";
import tech from "./latest news/tech.jpg";
import hamver from "./topics images/hamver.jpg";
import calendar from "./topics images/calendar.jpg";
import car from "./topics images/car.jpg";
import podcasts from "./topics images/podcasts.jpg";
import technical from "./topics images/technical.jpg";
import market from "./topics images/drivermarket.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import bahrain from "./schedule/bahrain.png";
import saudi from "./schedule/saudi.png";
import aus from "./schedule/aus.png";
import imola from "./schedule/imola.png";
import alfa from "./teams images/alfa.png";
import alpha from "./teams images/alpha.png";
import alpine from "./teams images/alpine.png";
import ferrari from "./teams images/ferrari.png";
import mercedes from "./teams images/mercedes.png";
import mcl from "./teams images/mcl.png";
import williams from "./teams images/williams.png";
import redbull from "./teams images/red bull.png";
import aston from "./teams images/aston.png";
import haas from "./teams images/haas.png";
import Drivername from './components/Drivername';
import Teams from './components/Teams';
// import Topics from './components/Topics';

const Bar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  return (
    <div>
      <div className="container bg-red-600 w-full flex items-center justify-left font-serif">
        <img className=" ml-28 h-24 w-24" src={f1logo} alt="fia logo" />
        <button
          className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black  hover:h-24 hover:w-28 flex flex-wrap hover:pt-9 hover:pl-5"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          LATEST
          <RiArrowDropDownLine />
          {/* <select className="dropdown bg-blue-500 w-5" value={DropDownList} onChange={event=>{setDropDownList(event.target.value);
            console.log(event.target.value)}  
        }>
            <option value="Charles Leclerc">Charles Leclerc</option>
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Carlos Sainz">Carlos Sainz</option>
            <option value="Red Bull">Red Bull</option>
        </select>
        {
      DropDownList === "Charles Leclerc" ? <p>P1</p> :
      (DropDownList ==="Max Verstappen" ? <p>DNF</p> : 
      (DropDownList ==="Ferrari" ? <p>1-2 </p> :
      (DropDownList ==="Carlos Sainz" ? <p>P2</p> :
      (DropDownList ==="Red Bull" ? <p>DOUBLE DNF</p>  : <p>Catch up!!!</p>))))
      
    } */}
        </button>
        <button className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black hover:h-24 hover:w-28">
          VIDEO
        </button>
        <button
          className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black  hover:h-24 hover:w-36 flex flex-wrap hover:pt-9 hover:pl-5"
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          SCHEDULE
          <RiArrowDropDownLine />
        </button>
        <button
          className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black hover:h-24 hover:w-36 flex flex-wrap hover:pt-9 hover:pl-4"
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}
        >
          STANDINGS
          <RiArrowDropDownLine />
        </button>
        <button
          className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black hover:h-24 hover:w-30 flex flex-wrap hover:pt-9 hover:pl-2"
          onMouseEnter={() => setIsShown4(true)}
          onMouseLeave={() => setIsShown4(false)}
        >
          DRIVERS
          <RiArrowDropDownLine />
        </button>
        <button
          className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black hover:h-24 hover:w-28 flex flex-wrap hover:pt-9 hover:pl-5"
          onMouseEnter={() => setIsShown5(true)}
          onMouseLeave={() => setIsShown5(false)}
        >
          TEAMS
          <RiArrowDropDownLine />
        </button>
        <button
          className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black hover:h-24 hover:w-28 flex flex-wrap hover:pt-9 hover:pl-4"
          onMouseEnter={() => setIsShown6(true)}
          onMouseLeave={() => setIsShown6(false)}
        >
          GAMING
          <RiArrowDropDownLine />
        </button>
        <button className="ml-10 mt-0 mb-0 text-white font-bold hover:bg-black hover:h-24 hover:w-36 flex flex-wrap hover:pt-9 hover:pl-4">
          LIVE TIMING
        </button>
      </div>
      {isShown && (
        <div
          className="relative hover:relative  text-black font-serif"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div className=" container w-full bg-black text-white border-2 border-b-red-600 border-l-transparent border-r-transparent border-t-transparent">
            <button className="  w-5/6 pl-36 pt-5 border-2 rounded-br-2xl mt-5 ml-5 border-white border-b-white border-l-transparent border-t-transparent text-left hover:underline hover:decoration-red-600">
              LATEST {">"}
            </button>
            <div className="flex font-serif">
              <div className=" w-1/4 pt-5 pl-36 ml-5 mb-5 pb-5">
                NEWS
                <button className="border-2 hover:border-b-red-600 border-l-transparent border-r-transparent border-t-transparent flex mt-5">
                  <img className="w-2/5 h-20" src={ocon} alt="ocon" />
                  <div className="w-3/5 ml-2 text-sm text-left">
                    NEWS
                    <br></br>
                    Ocon pleased to shrug off penalty and lead double-points
                    finish for Alpine
                  </div>
                </button>
                <button className="border-2 hover:border-b-red-600 border-l-transparent border-r-transparent border-t-transparent flex mt-5">
                  <img className="w-2/5 h-20" src={zhou} alt="zhou" />
                  <div className="w-3/5 ml-2 text-left text-sm">
                    NEWS
                    <br></br>
                    Zhou says scoring point on debut is 'something I would only
                    have dreamed of'
                  </div>
                </button>
                <button className="border-2 hover:border-b-red-600 border-l-transparent border-r-transparent border-t-transparent flex mt-5">
                  <img className="w-2/5 h-20" src={tech} alt="tech-talk" />
                  <div className="w-3/5 ml-2 text-sm text-left">
                    TECHNICAL
                    <br></br>
                    TECH TUESDAY: The power unit gains behind Ferrari's Bahrain
                    Grand Prix 1-2
                  </div>
                </button>
              </div>
              <div className="w-3/4 pt-5 mb-5 flex pl-5">
                <div className="flex flex-col w-4/5">
                  TOPICS
                  <div className="w-full flex pt-5 ">
                    <button className="w-1/3 mr-5 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        HAMILTON vs VERSTAPPEN
                      </div>
                      <img
                        className="w-full opacity-4.5"
                        src={hamver}
                        alt="hamver"
                      />
                    </button>
                    <button className="w-1/3 mr-5 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        RACE CALENDAR
                      </div>
                      <img
                        className="w-full h-full opacity-4.5"
                        src={calendar}
                        alt="hamver"
                      />
                    </button>
                    <button className="w-1/3 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        2022 CAR
                      </div>
                      <img
                        className="w-full opacity-4.5"
                        src={car}
                        alt="hamver"
                      />
                    </button>
                  </div>
                  {/* <Topics text="HAMILTON VS VERSTAPPEN" image={hamver} />
                  <Topics text="RACE CALENDAR" image={hamver} />
                  <Topics text="2022 CAR" image={hamver} /> */}
                  <div className="w-full flex pt-5 ">
                    <button className="w-1/3 mr-5 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        PODCASTS
                      </div>
                      <img
                        className="w-full opacity-9"
                        src={podcasts}
                        alt="hamver"
                      />
                    </button>
                    <button className="w-1/3 mr-5 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        TECHNICAL
                      </div>
                      <img
                        className="w-full opacity-4.5"
                        src={technical}
                        alt="hamver"
                      />
                    </button>
                    <button className="w-1/3 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        DRIVER MARKET
                      </div>
                      <img
                        className="w-full opacity-4.5"
                        src={market}
                        alt="hamver"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown2 && (
        <div
          className="relative hover:relative  text-black font-serif"
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          <div className="pl-36 container w-full bg-black text-white">
            <button className="  w-5/6 pt-5 border-2 rounded-br-2xl mt-5 ml-5 border-white border-b-white border-l-transparent border-t-transparent text-left hover:underline hover:decoration-red-600">
              FULL SCHEDULE {">"}
            </button>
            <div className="flex font-serif">
              <div className=" w-1/2 pt-5 ml-5 mb-5 pb-5 flex">
                <div className="w-1/2 pr-5 border-8 rounded-tr-lg border-gray-500 mr-5 border-l-transparent border-b-transparent">
                  <div className="mt-3">PREVIOUS</div>
                  <button className="mt-5 border-2 border-gray-300 rounded-md border-l-transparent border-t-transparent">
                    <img className="w-full" src={bahrain} alt="bahrain" />

                    {/* <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">FEATURE</div> */}

                    <div className="text-left mt-3 mb-6 text-gray-300">
                      FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022
                    </div>
                    <div className="text-left">
                      March 18-20 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;{">"}
                    </div>
                  </button>
                </div>
                <div className="w-1/2 pr-5 border-8 rounded-tr-lg border-gray-500 mr-5 border-l-transparent border-b-transparent">
                  <div className="mt-3">NEXT</div>
                  <button className="mt-5 border-2 border-gray-300 rounded-md border-l-transparent border-t-transparent">
                    <img className="w-full" src={saudi} alt="bahrain" />

                    {/* <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">FEATURE</div> */}

                    <div className="text-left mt-3 mb-6 text-gray-300">
                      FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2022
                    </div>
                    <div className="text-left">
                      March 25-27 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;{">"}
                    </div>
                  </button>
                </div>
              </div>
              <div className=" w-1/2 pt-5 -pl-36 ml-5 mb-5 pb-5 flex">
                <div className="w-1/2 pr-5 border-8 rounded-tr-lg border-gray-500 mr-5 border-l-transparent border-b-transparent">
                  <div className="mt-3">UPCOMING</div>
                  <button className="mt-5 border-2 border-gray-300 rounded-md border-l-transparent border-t-transparent">
                    <img className="w-full" src={aus} alt="bahrain" />

                    {/* <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">FEATURE</div> */}

                    <div className="text-left mt-3 mb-6 text-gray-300">
                      FORMULA 1 HEINEKEN AUSTRALIAN GRAND PRIX 2022
                    </div>
                    <div className="text-left">
                      April 08-10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;{">"}
                    </div>
                  </button>
                </div>
                <div className="w-1/2 pr-5 border-8 rounded-tr-lg border-gray-500 mr-5 border-l-transparent border-b-transparent">
                  <div className="mt-3">UPCOMING</div>
                  <button className="mt-5 border-2 border-gray-300 rounded-md border-l-transparent border-t-transparent">
                    <img className="w-full" src={imola} alt="bahrain" />

                    {/* <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">FEATURE</div> */}

                    <div className="text-left mt-3 mb-0 text-gray-300">
                      FORMULA 1 ROLEX GRAN PREMIO DEL MADE IN ITALY E
                      DELL'EMILIA-ROMAGNA 2022
                    </div>
                    <div className="text-left">
                      April 22-24 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;{">"}
                    </div>
                  </button>
                </div>
              </div>
              {/* <div className=" w-1/2 pt-5 ml-5 mb-5 pb-5 flex pr-25">
            <div className="w-1/2 pr-5 border-8 rounded-tr-lg border-gray-500 mr-5 border-l-transparent border-b-transparent"><div className="mt-3">PREVIOUS</div>
              <button className="mt-5 border-2 border-gray-300 rounded-md border-l-transparent border-t-transparent">
              <img className="w-full" src={bahrain} alt="bahrain" />
              
              <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">FEATURE</div>
              
              <div className="text-left mt-3 mb-5 text-gray-300">FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022</div>
              <div className="text-left">March 18-20 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{">"}</div>
              </button>
              </div>
              <div className="w-1/2 pr-5 border-8 rounded-tr-lg border-gray-500 mr-5 border-l-transparent border-b-transparent"><div className="mt-3">PREVIOUS</div>
              <button className="mt-5 border-2 border-gray-300 rounded-md border-l-transparent border-t-transparent">
              <img className="w-full" src={bahrain} alt="bahrain" />
              
              <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">FEATURE</div>
              
              <div className="text-left mt-3 mb-5 text-gray-300">FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022</div>
              <div className="text-left">March 18-20 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{">"}</div>
              </button>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      )}
      {isShown3 && (
        <div
          className="relative hover:relative  text-black font-serif"
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}
        >
          <div className=" container w-full bg-black text-white border-2 border-b-red-600 border-l-transparent border-r-transparent border-t-transparent">
            <div className="border-2 rounded-br-2xl border-white border-t-transparent border-l-transparent mr-36 mb-10">
              <button className=" w-1/6 pl-28 pt-5 pb-5 mt-5 ml-5 text-left hover:underline hover:decoration-red-600">
                2022 Season {">"}
              </button>
              <button className="  w-1/6 pl-10 pt-5 mt-5 ml-5 text-left hover:underline hover:decoration-red-600">
                Driver Standings {">"}
              </button>
              <button className="  w-1/6 pt-5 mt-5 ml-5 text-left hover:underline hover:decoration-red-600">
                Constructor Standings {">"}
              </button>
              <button className=" pl-1 w-1/6 pt-5 mt-5 ml-5 text-left hover:underline hover:decoration-red-600">
                Archive 1950-2022 {">"}
              </button>
              <button className="  w-1/6 pt-5 mt-5 ml-5 text-left hover:underline hover:decoration-red-600">
                F1 Awards {">"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isShown4 && (
        <div
          className="relative hover:relative  text-black font-serif"
          onMouseEnter={() => setIsShown4(true)}
          onMouseLeave={() => setIsShown4(false)}
        >
          <div className="container w-full bg-black text-white border-2 border-b-red-600 border-l-transparent border-r-transparent border-t-transparent">
            <div className="border-2 rounded-br-2xl ml-12 border-white border-t-transparent border-l-transparent mr-36">
              <button className=" w-1/6 pl-28 pt-5 pb-5 mt-5 text-left hover:underline hover:decoration-red-600">
                All Drivers {">"}
              </button>
              <button className="  w-1/6 pl-4 pt-5 mt-5 ml-5 text-left hover:underline hover:decoration-red-600">
                Hall of Fame {">"}
              </button>
            </div>
            <div className="flex">
              <div className="w-1/4 ml-12 flex flex-col">
                <Drivername number="23" color="williams" name="Alexander" surname="ALBON" />
                <Drivername number="14" color="alpine" name="Fernando" surname="ALONSO" />
                <Drivername number="77" color="alfa" name="Valtteri" surname="BOTTAS" />
                <Drivername number="10" color="alpha" name="Pierre" surname="GASLY" />
                <Drivername number="44" color="merc" name="Lewis" surname="HAMILTON" />
                
              </div>
              <div className="w-1/4  flex-col">
              <Drivername number="6" color="williams" name="Nicholas" surname="LATIFI" />
              <Drivername number="16" color="ferrari" name="Charles" surname="LECLERC" />
              <Drivername number="20" color="haas" name="Kevin" surname="MAGNUSSEN" />
              <Drivername number="4" color="mclaren" name="Lando" surname="NORRIS" />
              <Drivername number="31" color="alpine" name="Esteban" surname="OCON" />
                
              </div>
              <div className="w-1/4 flex-col">
              <Drivername number="11" color="redbull" name="Sergio" surname="PEREZ" />
              <Drivername number="3" color="mclaren" name="Daniel" surname="RICCIARDO" />
              <Drivername number="63" color="merc" name="George" surname="RUSSELL" />
              <Drivername number="55" color="ferrari" name="Carlos" surname="SAINZ" />
              <Drivername number="47" color="haas" name="Mick" surname="SCHUMACHER" /> 
              </div>
              <div className="w-1/4 flex-col mr-8 pb-8">
              <Drivername number="18" color="aston" name="Lance" surname="STROLL" />
              <Drivername number="22" color="alpha" name="Yuki" surname="TSUNODA" />
              <Drivername number="1" color="redbull" name="Max" surname="VERSTAPPEN" />
              <Drivername number="5" color="aston" name="Sebastian" surname="VETTEL" />
              <Drivername number="24" color="alfa" name="Zhou" surname="GUANYU" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown5 && (
        <div
          className="relative hover:relative  text-black font-serif"
          onMouseEnter={() => setIsShown5(true)}
          onMouseLeave={() => setIsShown5(false)}
        >
          <div className="container w-full bg-black text-white border-2 border-b-red-600 border-l-transparent border-r-transparent border-t-transparent">
            <button className="  w-5/6 pt-5 border-2 rounded-br-2xl mt-5 ml-24 border-white border-b-white border-l-transparent border-t-transparent text-left hover:underline hover:decoration-red-600">
              ALL TEAMS {">"}
            </button>
            <div className="flex">
              <div className="mt-5 w-1/4 ml-24 mb-5 ">
                <Teams name="ALFA ROMEO" car={alfa} color="alfa" />
                <div className="pb-3"></div>
                <Teams name="ALPHA TAURI" car={alpha} color="alpha" />
                <div className="pb-3"></div>
                <Teams name="ALPINE" car={alpine} color="alpine" />
              </div>
              <div className="mt-5 w-1/4 ">
              <Teams name="ASTON MARTIN" car={aston} color="aston" />
              <div className="pb-3"></div>
              <Teams name="FERRARI" car={ferrari} color="ferrari" />
              <div className="pb-3"></div>
              <Teams name="HAAS" car={haas} color="haas" />
              </div>
              <div className="mt-5 w-1/4">
              <Teams name="MCLAREN" car={mcl} color="mclaren" />
              <div className="pb-3"></div>
              <Teams name="MERCEDES" car={mercedes} color="merc" />
              <div className="pb-3"></div>
              <Teams name="RED BULL" car={redbull} color="redbull" />
              </div>
              <div className="mt-5 mr-4 w-1/4 ">
              <Teams name="WILLIAMS" car={williams} color="williams" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown6 && (
        <div
          className="relative hover:relative  text-black font-serif"
          onMouseEnter={() => setIsShown6(true)}
          onMouseLeave={() => setIsShown6(false)}
        >
          <div className=" container w-full bg-black text-white border-2 border-b-red-600 border-l-transparent border-r-transparent border-t-transparent">
            <div className="border-2 rounded-br-2xl border-white border-t-transparent border-l-transparent mr-32 mb-10 ml-32 pb-5">
              <button className=" w-1/12 pt-5 mt-5   border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                Esports {">"}
              </button>
              <button className="  w-1/12 ml-20 pt-5 mt-5   border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                Fantasy {">"}
              </button>
              <button className="  w-1/12 ml-20 pt-5 mt-5   border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                F1 Manager 2022 {">"}
              </button>
              <button className=" w-1/12 ml-20 pt-5 mt-5   border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                F1 Play {">"}
              </button>
              <button className="  w-1/12 ml-20 pt-5 mt-5   border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                F1 Mobile Racing {">"}
              </button>
              <button className="  w-1/12 ml-20 pt-5 mt-5  border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                F1 2021 {">"}
              </button>
              <button className="  w-1/12 ml-20 pt-5 mt-5   border-t-transparent border-l-transparent border-r-transparent border-2 border-b-transparent text-center hover:border-b-red-600 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent">
                F1 Clash {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bar;
