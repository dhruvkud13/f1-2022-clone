import React from 'react'
import f1logo from "../src/fia logos/f1-final.png";
import rolex from './partners/rolex.png';
import emirates from './partners/emirates.png';
import aramco from './partners/aramco.png';
import dhl from './partners/dhl.png';
import pirelli from './partners/pirelli.png';
import crypto from './partners/crypto.com.png';
import heineken from './partners/heineken.png';
import aws from './partners/aws.png';
import lenovo from './partners/lenovo.png';
import zoom from './partners/zoom.png';
import ferrari from './partners/ferrari-trento.png';
import bwt from './partners/bwt.png';
import liquimoly from './partners/liqui-moly.png';
import drive from './partners/drive.png';
import herjavec from './partners/herjavec.png';

const Partners = () => {
  return (
    <div>
        <div className="bg-black text-white pb-5">
            <div className="flex">
                <div className="ml-80"></div>
                <div className="ml-8"></div>
        <img className=" pt-5 ml-80 h-16 w-16" src={f1logo}  alt="fia logo" />
        <button className="mt-7 ml-3 font-bold text-lg hover:text-red-600">OUR PARTNERS {">"}</button>
        </div>
        <div className="border-b-2 border-b-white mr-32 ml-32">
        <div className=" flex pb-5 ">
            <img src={rolex} width="180" height="8" alt="hi" />
            <img src={emirates} alt="hi" width="180" height="8"/>
            <img src={aramco} alt="hi" width="180" height="8"/>
            <img src={dhl} alt="hi" width="180" height="8"/>
            <img src={pirelli} alt="hi" width="180" height="8"/>
            <img src={crypto} alt="hi" width="180" height="8"/>
            <img src={heineken} alt="hi" width="180" height="8"/>
        </div>
        </div>
        <div className="pt-5 border-b-2 border-b-white pb-5 ml-32 mr-32">
        <div className="mx-24 flex ">
            <img src={aws} width="130" height="4" alt="hi" />
            <img src={lenovo} alt="hi" width="130" height="4"/>
            <img src={zoom} alt="hi" width="130" height="4"/>
            <img src={ferrari} alt="hi" width="130" height="4"/>
            <img src={bwt} alt="hi" width="130" height="4"/>
            <img src={liquimoly} alt="hi" width="130" height="4"/>
            <img src={drive} alt="hi" width="130" height="4"/>
            <img src={herjavec} alt="hi" width="130" height="4"/>
        </div></div>
        <div className="ml-32 mr-32 pt-10 flex mt-8 pb-10 border-8 rounded-lg border-solid border-gray-600 border-b-gray-600 border-l-transparent border-t-transparent border-r-gray-600">
            <div className="w-1/6 border-2 border-transparent">
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg font ">Latest News</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg ">Video</button >
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Drivers</button >
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Team</button >
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Schedule</button >
            </div>
            <div className="w-1/6">
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Standings</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">2022 Season</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">Driver Standings</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">Constructor Standings</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">Archive 1950-2022</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">F1 Awards</button>
            </div>
            <div className="w-1/6">
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Gaming</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">Esports</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">Fantasy</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">F1 Manager 2022</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">F1 Play</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">F1 2021</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">F1 Mobile Racing</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-sm">F1 Clash</button>
            </div>
            <div className="w-1/6">
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Live Timing</button>
            </div>
            <div className="w-1/6">
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Tickets</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">F1 Experiences</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Store</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Paddock Club</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">F1 TV</button>
                <br></br>
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">F1 Authentics</button>
            </div>
            <div className="w-1/6">
                <button className="border-2 font-semibold border-transparent hover:border-b-red-600 text-lg">Rules & Regulations</button>
            </div>
        </div>
        <div className="flex ml-32 mt-4 text-xs font-semibold">
            <button className="font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">CONTACTS</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">F1 TV SUPPORT</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">PRIVACY POLICY</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">COOKIES POLICY</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">COOKIES PREFERENCES</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">GUIDELINES</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">LEGAL NOTICES</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">CODE OF CONDUCT</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">ANTI BRIBERY</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">HUMAN RIGHTS</button>
        </div>
        <div className="flex ml-32 mt-4 text-xs font-semibold">
            <button className="font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">MODERN SLAVERY STATEMENT</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">GENDER PAY REPORT</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">TERMS OF USE</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">PARTNERS</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">F1 FAN VOICE</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">BEYOND THE GIRD-THE F1 PODCAST</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">F1 EXTREME INNOVATION</button>
        </div>
        <div className="flex ml-32 mt-4 text-xs font-semibold mb-5 border-b-2 mr-32 pb-5">
            <button className="font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">F1 CORPORTATE SITE</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">BECOME AN AFFILIATE</button>
            <button className="ml-9 font-semibold hover:border-red-600 border-2 border-transparent hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent">OFFICIAL F1 RACE PROGRAMME</button>
        </div>
        <div className="ml-32 mr-32 flex justify-between items-center">
            <img className=" h-12 w-20" src={f1logo}  alt="fia logo" />
            <div className="flex text-xs font-semibold text-gray-300">
                <div className="flex pr-1">&copy;</div>
                <div className="flex">2003-2022 Formula One World Championship Limited</div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Partners