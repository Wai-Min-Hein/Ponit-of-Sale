import React, { useState } from "react";
import { Collapse, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  AiOutlineMenuFold,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineDown,
} from "react-icons/ai";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import {
  PiUserCirclePlusBold,
  PiImagesSquareBold,
  PiUserSquareBold,
  PiSignOut,
} from "react-icons/pi";

const Sidebar = () => {
  const [saleOpen, setSaleOpen] = useState(true);
  const [invOpen, setInvOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(true);
  const [pfOpen, setPfOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarHandler = () => {};

  return (
    <div className=" w-1/5 h-full bg-bg-dark text-white border-r border-r-border text-sm cursor-pointer">
      {/* Overview */}
      <div className="flex items-center justify-between border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
        <div className="flex items-center  gap-2 ">
          <AiOutlineHome />
          <span>Overview</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <AiOutlineMenuFold />
        </button>
      </div>
      {/* Sale */}
      <div
        onClick={() => setSaleOpen(!saleOpen)}
        className="flex items-center justify-between border-b border-border py-2.5 pr-3.5 pl-5"
      >
        <div className="flex items-center  gap-2 ">
          <AiOutlineShop />
          <span>Sale</span>
        </div>
        <AiOutlineDown />
      </div>
      <Collapse in={saleOpen} className="text-xs">
        <div className="flex items-center gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Cashier</span>
        </div>
        <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Recent</span>
        </div>
      </Collapse>
      {/* Inventory */}
      <div
        onClick={() => setInvOpen(!invOpen)}
        className="flex items-center justify-between border-b border-border py-2.5 pr-3.5 pl-5"
      >
        <div className="flex items-center  gap-2 ">
          <FaClipboardList />
          <span>Inventory</span>
        </div>
        <AiOutlineDown />
      </div>
      <Collapse in={invOpen} className="text-xs">
        <div className="flex items-center gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Products</span>
        </div>
        <div className="flex items-center  gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Add Product</span>
        </div>
        <div className="flex items-center gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Stock Control</span>
        </div>
        <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Manage Brands</span>
        </div>
      </Collapse>
      {/* User */}
      <div
        onClick={() => setUserOpen(!userOpen)}
        className="flex items-center justify-between border-b border-border py-2.5 pr-3.5 pl-5"
      >
        <div className="flex items-center  gap-2 ">
          <PiUserCirclePlusBold />
          <span>User</span>
        </div>
        <AiOutlineDown />
      </div>
      <Collapse in={userOpen} className="text-xs">
        <div className="flex items-center gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Overview</span>
        </div>
        <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Create User</span>
        </div>
      </Collapse>
      {/* Media */}
      <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
        <PiImagesSquareBold />
        <span>Media </span>
      </div>
      {/* Profile */}
      <div
        onClick={() => setPfOpen(!pfOpen)}
        className="flex items-center justify-between border-b border-border py-2.5 pr-3.5 pl-5"
      >
        <div className="flex items-center  gap-2 ">
          <PiUserSquareBold />
          <span>Profile</span>
        </div>
        <AiOutlineDown />
      </div>
      <Collapse in={pfOpen} className="text-xs">
        <div className="flex items-center gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>My Account</span>
        </div>
        <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
          <BiRadioCircleMarked />
          <span>Edit</span>
        </div>
      </Collapse>
      {/* Sign Out */}
      <div className="flex items-center border-b border-border gap-2 py-2.5 pr-3.5 pl-5">
        <PiSignOut />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
