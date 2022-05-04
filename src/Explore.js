import React from "react";
import sports from "./explore/sports.jpg";
import sustain from "./explore/sustain.jpg";
import racecal from "./explore/racecal.jpg";
import podcasts from "./explore/podcasts.jpg";
import playstore from "./socialmedia/playstore.svg";
import appstore from "./socialmedia/appstore.svg";
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';

const Explore = () => {
  return (
    <div className="bg-gray-600 pt-5 pb-5">
      <div className=" ml-32 mr-32 mb-5 border-8 rounded-lg border-solid border-black border-t-black border-l-transparent border-b-transparent border-r-black">
        <div className="font-bold text-2xl mt-5 text-white">
          EXPLORE F1 TOPICS
        </div>
        <div className="flex mt-5">
          <button className="w-1/4 mr-5 rounded-md  border-2  relative text-center hover:border-red-600 hover:text-xl text-white text-2xl font-extrabold">
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              SUSTAINABILITY
            </div>
            <img
              className="w-full h-full opacity-9 "
              src={sustain}
              alt="hamver"
            />
          </button>
          <button className="w-1/4 mr-5 rounded-md  border-2  relative text-center hover:border-red-600 hover:text-xl text-white text-2xl font-extrabold">
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              RACE CALENDAR
            </div>
            <img
              className="w-full h-full opacity-9 "
              src={racecal}
              alt="hamver"
            />
          </button>
          <button className="w-1/4 mr-5 rounded-md  border-2 relative text-center hover:border-red-600 hover:text-xl text-white  text-2xl font-extrabold">
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              PODCASTS
            </div>
            <img
              className="w-full h-full opacity-9 "
              src={podcasts}
              alt="hamver"
            />
          </button>

          <button className="w-1/4 mr-5 rounded-md  border-2  relative text-center hover:border-red-600 hover:text-xl text-white font-extrabold text-2xl">
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              ESPORTS
            </div>
            <img
              className="w-full h-full opacity-9 "
              src={sports}
              alt="hamver"
            />
          </button>
        </div>
      </div>
      <div className="mt-8 border-t-2 border-black flex">
        <div className="ml-24 pl-2 mt-3">
          <div className="row-span-3 flex">
            <div className="col-span-2 text-sm mr-2 text-white font-semibold">
              <div>DOWNLOAD THE</div>
              <div>OFFICIAL F1 APP</div>
            </div>
            <button className="mt-1">
              <img
                src={playstore}
                alt="play"
                width="100"
                height="100"
                className="mr-2"
              />
            </button>
            <button className="mt-1">
              <img src={appstore} alt="play" width="100" height="100" />
            </button>
          </div>
        </div>
        <div className="ml-80"></div>
        <div className="ml-80"></div>
        <div className="ml-56 mt-2 flex ">
          <button className="mr-2 hover:bg-black"><AiFillFacebook size={40} color="white"/></button>
          <button className="mr-2 hover:bg-black"><AiFillTwitterSquare size={40} color="white"/></button>
          <button className="mr-2 hover:bg-black"><AiFillInstagram size={40} color="white"/></button>
          <button className="mr-2 hover:bg-black"><AiFillYoutube size={40} color="white"/></button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
