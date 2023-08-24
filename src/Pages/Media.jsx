import { useEffect, useRef, useState } from "react";
import { Breadcrumbs, Image, Anchor } from "@mantine/core";
import DragAndDrop from "../Components/Media/DragAndDrop";
import "../styles/media.css";
import UploadedMedia from "../Components/Media/UploadedMedia";
import Paginate from "../Components/Media/Paginate";
import { useGetImagesMutation, useUploadImageMutation } from "../Services/Api/MediaApi";

const Media = () => {

  const [allMediaImgs, setAllMediaImgs] = useState([])


  
  // Breadcrumbs
  const items = [
    { title: "Media", href: "/" },
    { title: "Uploader", href: "/media" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} c="#787f80">
      {item.title}
    </Anchor>
  ));
  const token = localStorage.getItem("token");

  const [uploadImage] = useUploadImageMutation();
  const [getImages] = useGetImagesMutation();

  //Dropzone
 
  const getAllImages = async () => {
    const {data} = await getImages(token)

    setAllMediaImgs(data?.data)
  }

useEffect(() => {
  getAllImages()
}, [])

  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    const photos = new FormData();

    for(let i =0; i<files.length; i++){

      photos.append("photo[]",files[i], files[i].name)
    }



    const res = await uploadImage({token,photos})
    console.log(res)


  };

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

      <DragAndDrop  onDrop={setFiles}  />
      <div className="text-right mt-6">
        <button
          onClick={handleUpload}
          className="px-6 py-2 bg-primary rounded-md text-right"
        >
          Upload
        </button>
      </div>
      <UploadedMedia previews={previews} />
      <Paginate />
    </div>
  );
};

export default Media;
