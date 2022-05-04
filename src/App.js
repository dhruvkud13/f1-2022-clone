import "./App.css";
import fialogo from "../src/fia logos/fia logo.png";
import f1tvlogo from "../src/fia logos/f1tv.jpg";
import { AiOutlineUser } from "react-icons/ai";
import Bar from "./Bar";
import News from './News';
import Editor from "./Editor";
import More from "./More";
import Leader from "./Leader";
import Calendar from "./Calendar";
import Explore from "./Explore";
import Partners from "./Partners";

function App() {
  return (
    <div>
      
      <header className="bg-white w-full">
        <div className="flex flex-1 items-center justify-between w-full">
          <div className="flex items-center justify-center ml-5 font-serif">
            <button className="  w-10 h-10 ml-20 flex-row inline-flex">
              <img src={fialogo} alt="fia logo" />
            </button>
            {/* <div className=" w-10 h-10  ml-10 mt-3 mb-3 flex-row inline-flex ">
              <img src={f1logo} alt="fia logo" />
            </div>
            <div className=" w-10 h-10  ml-5 mt-3 mb-3 flex-row inline-flex ">
              <img src={f2logo} alt="fia logo"></img>
            </div>
            <div className=" w-10 h-10  ml-5 mt-3 mb-3 flex-row inline-flex ">
              <img src={f3logo} alt="fia logo"></img>
            </div> */}
            <button className="ml-10 mt-3 mb-3 text-gray-500 font-bold hover:text-black">
              F1&trade;
            </button>
            <button className="ml-5 mt-3 mb-3 text-gray-500 font-bold hover:text-black">
              F2&trade;
            </button>
            <button className="ml-5 mt-3 mb-3 text-gray-500 font-bold hover:text-black">
              F3&trade;
            </button>
            {/* <img className="   ml-5 cursor-pointer flex-row inline-flex" src={require('./f1 logo.jpg')} alt='f1 logo' width={40} height={60}></img>
      <img className="  ml-5 cursor-pointer flex-row inline-flex" src={require('./f2 logo.png')} alt='f2 logo' width={40} height={40}></img>
      <img className="   ml-5 cursor-pointer flex-row inline-flex" src={require('./f3 logo.png')} alt='f3 logo' width={40} height={40}></img> */}
          </div>
          {/* </div> */}
          <div className="flex ml-5 text-black  font-serif ">
            <button className="ml-5 mr-2 mt-3 mb-3  hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
              AUTHENTICS
            </button>
            <button className="ml-5 mr-2 mt-3 mb-3  hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
              STORE
            </button>
            <button className="ml-5 mr-2 mt-3 mb-3  hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
              TICKETS
            </button>
            <button className="ml-5 mr-2 mt-3 mb-3  hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
              HOSPITALITY
            </button>
            <button className="ml-5 mr-2 mt-3 mb-3  hover:border-4 hover:border-b-red-600 hover:text-red-600 hover: border-l-transparent hover: border-t-transparent hover: border-r-transparent">
              SERVICES
            </button>
            <div className=" w-15 h-10  ml-5 mr-5 mt-3 mb-3 flex-row inline-flex ">
              <img src={f1tvlogo} alt="fia logo"></img>
            </div>
            <button className="ml-5 mr-2 mt-3 mb-3 border-2 flex flex-1 bg-white text-black hover:border-red-600 py-2 px-4 rounded-lg">
              {" "}
              <AiOutlineUser /> USER{" "}
            </button>
            <button className=" mt-3 mb-3 border-2 flex flex-1 mr-20 bg-red-600 text-white font-bold hover:border-red-600 hover:text-black hover:bg-white  py-2 px-4 rounded-lg">
              {" "}
              SUBSCRIBE{" "}
            </button>
          </div>
        </div>
      </header>
      <Bar />
      <News />
      <Editor />
      <More />
      <Calendar />
      <Leader />
      <Explore />
      <Partners />
    </div>
  );
}

export default App;