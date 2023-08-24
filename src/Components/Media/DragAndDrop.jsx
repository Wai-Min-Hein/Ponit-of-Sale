import React, { useRef } from "react";
import { Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { PiCloudArrowUp } from "react-icons/pi";

const DragAndDrop = ({ onDrop }) => {

  return (
    <Dropzone
      className="w-full h-52 bg-bg-dark flex justify-center items-center text-primary border border-solid border-border rounded-lg mt-5"
      accept={IMAGE_MIME_TYPE}
      onDrop={onDrop}
      // onDrop={(onDrop) => console.log('accepted files', onDrop)}
      // onDrop={onDropHandler}
      // onReject={(onDrop) => console.log('rejected files', onDrop)}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-[4rem] flex justify-center items-center bg-bg rounded-full p-3">
          <button className="border border-dashed border-primary rounded-full p-2">
            <PiCloudArrowUp className="text-xl " />
          </button>
        </div>
        <p className="text-white">
          <span className="text-primary underline">Browse</span> or Drag an
          image
        </p>
      </div>
    </Dropzone>
  );
};

export default DragAndDrop;
