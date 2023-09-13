import React from "react";
import { useEffect, useState } from "react";
import Item from "./item";

export const List = ({ filteredUsers }) => {
  useEffect(() => {
    console.log("List render");
  });

  return (
    <>
      {filteredUsers.map((user, index) => (
        <Item user={user} />
      ))}
    </>
  );
};
