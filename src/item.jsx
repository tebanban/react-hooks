import React from "react";
import { useEffect, useState } from "react";

function Item({ user }) {
  useEffect(() => {
    console.log("Item render");
  });

  return (
    <div>
      <li>{user.name}</li>
    </div>
  );
}

export default Item;
