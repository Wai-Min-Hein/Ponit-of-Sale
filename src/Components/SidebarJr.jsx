import React, { useState } from "react";
import { Collapse } from "@mantine/core";
import { AiOutlineHome, AiOutlineShop, AiOutlineDown } from "react-icons/ai";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import {
  PiUserCirclePlusBold,
  PiImagesSquareBold,
  PiUserSquareBold,
  PiSignOut,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

const SidebarJr = ({ isOpen }) => {
  const [saleOpen, setSaleOpen] = useState(true);
  const [invOpen, setInvOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(true);
  const [pfOpen, setPfOpen] = useState(true);
  return (
    <div className="w-13 h-screen bg-bg-dark text-white border-r border-r-border text-sm cursor-pointer">
      {/* Overview */}
      <NavLink to={"/"}>
        <div className="border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
          {/* <div className="flex items-center  gap-2 "> */}
          <AiOutlineHome />
          {/* </div> */}
        </div>
      </NavLink>
      {/* Sale */}
      <NavLink to={"/cashier"}>
        <div
          onClick={() => setSaleOpen(!saleOpen)}
          className="border-b border-border py-2.5 pr-3.5 pl-5"
        >
          {/* <div className="flex items-center  gap-2 "> */}
          <AiOutlineShop />
          {/* </div> */}
        </div>
      </NavLink>

      {/* Inventory */}
      <div
        onClick={() => setInvOpen(!invOpen)}
        className=" border-b border-border py-2.5 pr-3.5 pl-5"
      >
        {/* <div className="flex items-center  gap-2 "> */}
        <FaClipboardList />
        {/* </div> */}
      </div>

      {/* User */}
      <div
        onClick={() => setUserOpen(!userOpen)}
        className="border-b border-border py-2.5 pr-3.5 pl-5"
      >
        {/* <div className="flex items-center  gap-2 "> */}
        <PiUserCirclePlusBold />
        {/* </div> */}
      </div>

      {/* Media */}
      <NavLink to={"/media"}>
        <div className="border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
          <PiImagesSquareBold />
        </div>
      </NavLink>
      {/* Profile */}
      <div
        onClick={() => setPfOpen(!pfOpen)}
        className=" border-b border-border py-2.5 pr-3.5 pl-5"
      >
        {/* <div className="flex items-center  gap-2 "> */}
        <PiUserSquareBold />
        {/* </div> */}
      </div>

      {/* Sign Out */}
      <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
        <PiSignOut />
      </div>
    </div>
  );
};

export default SidebarJr;
