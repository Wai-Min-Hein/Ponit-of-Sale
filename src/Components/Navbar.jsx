import React from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { RiMoonClearFill } from "react-icons/ri";
import { PiUserCircleFill } from "react-icons/pi";
import {AiOutlineMenuFold} from "react-icons/ai"

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between bg-bg border-b border-border p-3">
      <div className="w-20 flex justify-between">
        <h1>MMS</h1>
        <button onClick={toggleSidebar}>
          <AiOutlineMenuFold />
        </button>
      </div>
      <div className="flex gap-3">
        <button className="text-sm">
          <BiSolidBellRing />
        </button>
        <button className="text-sm">
          <RiMoonClearFill />
        </button>
        <button className="text-lg">
          <PiUserCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
