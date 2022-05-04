import React from "react";
import {GrPlay} from 'react-icons/gr';
import vegas from './vegas.jpg';
import vegastrack from './vegastrack.jpg';
import f1vegas from './f1vegas.jpg';
import layout from './layout.jpg';
import vegasbaby from './vegasbaby.jpg';

const Editor = () => {
  return (
    <div className="mt-5 pl-20 rounded-tr-3xl rounded-br-3xl border-solid border-8 border-t-red-600 border-r-red-600 border-b-red-600 border-l-transparent">
      <div className="font-bold  text-3xl mt-5">EDITOR'S PICKS</div>
      <div className="flex">
      <div className=" w-1/2 mt-10 mr-5  pt-8 pr-5 font-semibold">
        <a
          className="text-black font-bold  font-serif  text-3xl  hover:underline"
          href="https://www.formula1.com/en/latest/article.why-the-announcement-of-the-las-vegas-grand-prix-is-a-seminal-moment-for-f1.WfgO2u18yFlDKzOwJriiV.html"
        >
          Why the Las Vegas Grand Prix announcement is a seminal moment for F1
        </a>
        <img className="mt-5 w-full" src={vegasbaby} alt="vegas" />
        {/* <video
          className="pt-5"
          src={video1}
          width="600"
          height="300"
          controls="controls"
          autoplay="true"
        /> */}
      </div>
        <div className=" w-1/2">
          <div className="flex flex-col">
            <div className="flex mt-10">
              <div className="w-1/2 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
                <button>
                  <img className="w-full" src={vegas} alt="redbull" />
                  <div className="relative">
                    <div className=" absolute top-3/4 left-0 transform translate-x-6 -translate-y-6">
                      <GrPlay />
                    </div>
                  </div>
                  <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                    VIDEO
                  </div>

                  <div className="text-left mb-5 ml-5">
                  WATCH: Lawrence Barretto takes us on a tour of the Las Vegas Grand Prix track
                  </div>
                </button>
              </div>
              <div className="w-1/2 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
                <button>
                  <img src={vegastrack} alt="redbull" />
                  <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                    FEATURE
                  </div>
                  <div className="text-left mb-5 ml-5">
                  LAS VEGAS GRAND PRIX: Everything you need to know about F1’s newest race
                  </div>
                </button>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-1/2 mb-5 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
                <button>
                  <img className="w-full" src={f1vegas} alt="redbull" />
                  <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                    FEATURE
                  </div>

                  <div className="text-left mb-5 ml-5">
                  IN NUMBERS: The facts and figures behind the new Las Vegas Grand Prix
                  </div>
                </button>
              </div>
              <div className="w-1/2 mb-5 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
                <button>
                  <img src={layout} alt="redbull" />
                  <div className="relative">
                    <div className=" absolute top-3/4 left-0 transform translate-x-6 -translate-y-6">
                      <GrPlay />
                    </div>
                  </div>
                  <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                    VIDEO
                  </div>
                  <div className="text-left mb-5 ml-5">
                  REVEALED: Check out the Las Vegas Grand Prix circuit’s layout
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Editor;
