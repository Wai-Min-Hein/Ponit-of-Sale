import React from "react";
import { Image, SimpleGrid } from "@mantine/core";

const GridView = ({ previews }) => {
  return (
    <SimpleGrid
      cols={5}
      breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      mt={previews.length > 0 ? "xl" : 0}
    >
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        width={200}
        height={200}
      />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        width={200}
        height={200}
      />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        width={200}
        height={200}
      />
      <Image
        radius="md"
        width={200}
        height={200}
        src="https://plus.unsplash.com/premium_photo-1669306565444-826a49dfe208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      {previews}
    </SimpleGrid>
  );
};

export default GridView;
