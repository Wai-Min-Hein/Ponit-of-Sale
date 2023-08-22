import React, { useState } from "react";
import { Pagination } from "@mantine/core";      

const Paginate = () => {
    const [activePage, setPage] = useState(1);
  return (
    <Pagination
      className="mt-10 "
      position="right"
      value={activePage}
      onChange={setPage}
      total={3}
      size="xs"
      color="dark"
    />
  )
}

export default Paginate
