import React, { useState } from "react";
import { Breadcrumbs, Image, Anchor } from "@mantine/core";
import DragAndDrop from "../Components/Media/DragAndDrop";
import "../styles/media.css";
import UploadedMedia from "../Components/Media/UploadedMedia";
import Paginate from "../Components/Media/Paginate";

const Media = () => {
  // Breadcrumbs
  const items = [
    { title: "Media", href: "/" },
    { title: "Uploader", href: "/media" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} c="#787f80">
      {item.title}
    </Anchor>
  ));

  //Dropzone
  const [files, setFiles] = useState([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        radius="md"
        width={200}
        height={200}
      />
    );
  });
  return (
    <div className="w-full h-full p-4">
      <h3 className="text-white text-lg">Media</h3>
      <Breadcrumbs className="text-sm">{items}</Breadcrumbs>

      <DragAndDrop onDrop={setFiles} />
      <UploadedMedia previews={previews} />
      <Paginate />
    </div>
  );
};

export default Media;
