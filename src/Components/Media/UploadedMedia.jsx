import React, { useState } from "react";
import { MdOutlineWindow, MdList } from "react-icons/md";
import GridView from "./GridView";
import ListView from "./ListView";

const UploadedMedia = ({previews}) => {
  const [view, setView] = useState("grid");
//   console.log(props);
  const viewHandler = (views) => {
    if (views == "grid") {
      setView("grid");
      //   console.log("grid");
    } else {
      setView("list");
      //   console.log("list");
    }
  };
  return (
    <div className="mt-10">
      {/* title+list&grid_icon */}
      <div className="flex justify-between items-center">
        <p className="text-gray-50 text-sm">Media / Uploaded Photo</p>
        <div className="flex text-border text-xl">
          <button
            onClick={() => viewHandler("list")}
            className={`${
              view == "list" && "text-primary"
            } border border-primary p-1 rounded-s`}
          >
            <MdList />
          </button>
          <button
            onClick={() => viewHandler("grid")}
            className={`${
              view == "grid" && "text-primary"
            } border border-primary p-1 rounded-e`}
          >
            <MdOutlineWindow />
          </button>
        </div>
      </div>
      {/* <GridView previews={previews} /> */}
      {/* <ListView /> */}

      {view == "grid" ? <GridView previews={previews} /> : <ListView />}
    </div>
  );
};

export default UploadedMedia;
