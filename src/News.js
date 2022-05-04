import React from "react";
import "./News.css";
import video1 from "../src/lec.mp4";
import redbull from "./redbull.jpg";
import bottas from "./bottas.jpg";
import { GrPlay } from "react-icons/gr";
import mclaren from "./mclaren.jpg";
import rb from "./rb.jpg";
import Editor from "./Editor";

const News = () => {
  return (
    <div className="flex font-serif">
      <div className=" w-1/2 mt-10 mr-10 pl-20 pt-8 pr-10 rounded-tr-3xl border-solid border-8 border-t-red-600 border-r-red-600 border-l-transparent border-b-transparent text-red-600 font-semibold">
        TECHNICAL
        <br></br>
        <a
          className="text-black font-bold  font-serif  text-3xl  hover:underline"
          href="https://www.formula1.com/en/latest/article.tech-tuesday-the-power-unit-gains-behind-ferraris-bahrain-grand-prix-1-2.3wrMg69X1kw0izCDmLatoL.html"
        >
          TECH TUESDAY: THE POWER UNIT GAINS BEHIND FERRARI'S BAHRAIN GRAND PRIX
          1-2
        </a>
        <video
          className="pt-5"
          src={video1}
          width="600"
          height="300"
          controls="controls"
          autoplay="true"
        />
      </div>
      <div className=" w-1/2">
        <div className="flex flex-col">
          <div className="flex mt-10">
            <div className="w-1/2 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
              <button>
                <img className="w-full" src={redbull} alt="redbull" />

                <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                  FEATURE
                </div>

                <div className="text-left mb-5 ml-5">
                  More Ferrari success or a Red Bull resurgence? – 5 storylines
                  we’re excited for ahead of the 2022 Saudi Arabian Grand Prix
                </div>
              </button>
            </div>
            <div className="w-1/2 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
              <button>
                <img src={bottas} alt="redbull" />
                <div className="relative">
                  <div className=" absolute top-3/4 left-0 transform translate-x-6 -translate-y-6">
                    <GrPlay />
                  </div>
                </div>
                <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                  VIDEO
                </div>
                <div className="text-left mb-5 ml-5">
                  SAY WHAT? Verstappen, Gasly and Magnussen all feature in the
                  best team radio from Bahrain
                </div>
              </button>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="w-1/2 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
              <button>
                <img className="w-full" src={mclaren} alt="redbull" />

                <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                  NEWS
                </div>

                <div className="text-left mb-5 ml-5">
                  ‘We don’t have a good enough car’ – McLaren drivers downbeat
                  after point-less Bahrain GP showing
                </div>
              </button>
            </div>
            <div className="w-1/2 border-2 border-l-transparent border-t-transparent rounded-br-3xl mr-5 hover:border-red-600 hover:border-l-transparent hover:border-t-transparent">
              <button>
                <img src={rb} alt="redbull" />
                <div className=" text-left text-red-600 ml-5 pt-2 text-xs pb-1 font-semibold">
                  NEWS
                </div>
                <div className="text-left mb-5 ml-5">
                  Red Bull are still favourites say Ferrari, despite winning
                  start in Bahrain
                </div>
              </button>
            </div>
          </div>
          <div className="flex mt-10">
            <button className="mb-10 bg-red-600 p-3 rounded-lg text-white text-xs border-4 hover:border-red-600 hover:bg-white hover:text-black border-transparent hover:font-semibold">
              VIEW LATEST NEWS {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
