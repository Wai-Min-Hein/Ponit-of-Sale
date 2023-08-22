import React from 'react'
import { Table } from "@mantine/core";
import { BiTrash, BiCopy } from "react-icons/bi";

const photoInfos = [
    {
      no: 1,
      name: "09038",
      account: "nyeint",
      date: "12/7/2023",
      time: "10:00 AM",
      fileSize: "2MB",
    },
    {
      no: 2,
      name: "09038",
      account: "nyeint",
      date: "12/7/2023",
      time: "10:00 AM",
      fileSize: "2MB",
    },
    {
      no: 3,
      name: "09038",
      account: "nyeint",
      date: "12/7/2023",
      time: "10:00 AM",
      fileSize: "2MB",
    },
  ];

const ListView = () => {
    const rows = photoInfos.map((info) => (
        <tr className="border-border" key={info.no}>
          <td>{info.no}</td>
          <td>{info.name}</td>
          <td>{info.account}</td>
          <td>{info.date}</td>
          <td>{info.time}</td>
          <td>{info.fileSize}</td>
          <td>
            <div className="flex gap-2">
              <BiTrash />
              <BiCopy />
            </div>
          </td>
        </tr>
      ));
  return (
    <Table
    className=" text-xs text-white border-border mt-5"
    // highlightOnHover
    withBorder
    horizontalSpacing="sm"
    verticalSpacing="sm"
  >
    <thead>
      <tr>
        <th>NO</th>
        <th>NAME</th>
        <th>ACCOUNT</th>
        <th>DATE</th>
        <th>TIME</th>
        <th>FILE SIZE</th>
        <th></th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </Table>
  )
}

export default ListView
