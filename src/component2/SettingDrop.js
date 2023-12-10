import React from "react";
import { RxCross1 } from "react-icons/rx";

function SettingDrop() {
  return (
    <div className="w-96 bg-white  border-2 mt-2 ml-2 ">
      <div className="switcher flex h-14 items-center p-3 justify-between">
        <p className="  text-lg font-bold mt-2 p-2">Switcher</p>
        <RxCross1 />
      </div>
      <div className="h-[440px] mt-0 overflow-auto">
      <div className="theme flex  border-y-2  justify-around">
        <p className="   border-gray-200 w-1/2 text-center bg-green-100 border-r-2 h-10 pt-2 text-green-500 ">Theme Styles</p>
        <p className=" border-l-2  h-10  pt-2 border-gray-200  w-1/2 text-center  ">Theme Colors</p>
      </div>
      <div className="color -mt-4 bg-gray-200">Theme Color Mode:</div>
      <div className="flex p-2    space-x-8 ">
        <p className="flex  space-x-2 ">
          <input type="checkbox" className="" />
          <p className="pt-1">light</p>
        </p>
        <p className="flex space-x-2">
          <input type="checkbox" className="" />
          <p>Dark</p>
        </p>
      </div>
      <div className="color -mt-4 bg-gray-200">Direction:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex  space-x-2">
          <input type="checkbox" className="" />
          <p>LTR</p>
        </p>
        <p className="flex space-x-2">
          <input type="checkbox" className="" />
          <p>RTL</p>
        </p>
      </div>
      <div className="color  -mt-4 bg-gray-200">Navigation Styles:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Vertical</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Horizontal</p>
        </p>
      </div>
      <div className="color  -mt-4 bg-gray-200">Page Style:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Regular</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Classic</p>
        </p>
      </div>
      <div className="color  -mt-4 bg-gray-200">Layout Width Style:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>FullWidth</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Boxed</p>
        </p>
      </div>
      <div className="color  -mt-4 bg-gray-200">Menu Positions:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Fixed</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Scrollable</p>
        </p>
      </div>
      <div className="color  -mt-4 bg-gray-200">Header Positions:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Fixed</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Scrollable</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Rounded</p>
        </p>
      </div>
      <div className="color  -mt-4 bg-gray-200">Loader:</div>
      <div className="flex p-2  space-x-8  ">
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Enable</p>
        </p>
        <p className="flex    space-x-2">
          <input type="checkbox" className="" />
          <p>Disable</p>
        </p>
      </div>
      </div>

      <div className="btn space-x-1 space-y-1">
        <button className=" bg-purple-400  rounded-lg  w-fit p-2 pl-3 pr-3 "> Buy Now</button>
        <button className=" bg-orange-400  rounded-lg  w-fit p-2 pl-3 pr-3 "> Our Portfolio</button>
        <button className=" bg-orange-600  rounded-lg  w-fit p-2 pl-3 pr-3 "> Reset</button>
      </div>
    </div>
  );
}

export default SettingDrop;
