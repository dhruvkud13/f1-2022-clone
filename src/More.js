import React from "react";
import guanyu from "./more news/guanyu.jpg";
import seb from "./more news/seb.jpg";
import radio from "./more news/radio.jpg";
import reaction from "./more news/reaction.jpg";
import { GrPlay } from "react-icons/gr";

const More = () => {
  return (
    <div className="mt-5">
      <button className=" pl-20 pt-5 mb-2 mt-5 ml-5 text-left hover:underline hover:decoration-red-600 text-2xl hover:text-red-600 font-bold ">
        MORE NEWS {">"}
      </button>
      <div className="ml-24 mr-10 border-8 mb-5 border-solid border-black border-b-black border-l-transparent border-t-transparent border-r-transparent"></div>
      <div className="flex">
        <div className=" ml-24 w-1/4 hover:bg-black hover:text-white mb-10">
          <button>
            <img className="w-full" src={guanyu} alt="redbull" />

            <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
              NEWS
            </div>

            <div className="text-left mb-5 ml-5">
              'Messy' Saudi Arabian Grand Prix cost me consecutive points, says
              Zhou
            </div>
          </button>
        </div>
        <div className=" ml-5 w-1/4 hover:bg-black hover:text-white mb-10">
          <button>
            <img className="w-full" src={seb} alt="redbull" />

            <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
              NEWS
            </div>

            <div className="text-left mb-5 ml-5">
            Vettel to make F1 return for Australian GP after missing opening two rounds of 2022
            </div>
          </button>
        </div>
        <div className=" ml-5 w-1/4 hover:bg-black hover:text-white mb-10">
          <button>
            <img className="w-full" src={radio} alt="redbull" />

            <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
              VIDEO
            </div>

            <div className="text-left mb-5 ml-5">
            SAY WHAT: Enjoy the best radio messages from the 2022 Saudi Arabian Grand Prix
            </div>
          </button>
        </div>
        <div className=" ml-5 w-1/4 hover:bg-black hover:text-white mr-10 mb-10">
          <button>
            <img className="w-full" src={reaction} alt="redbull" />
            <div className="relative">
                  <div className=" absolute top-3/4 left-0 transform translate-x-6 -translate-y-6">
                    <GrPlay />
                  </div>
                </div>
            <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
              VIDEO
            </div>

            <div className="text-left mb-5 ml-5">
            ‘It’s going to be insane’ – The drivers react to Las Vegas’s return to the F1 calendar
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
