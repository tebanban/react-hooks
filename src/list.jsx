import React from 'react';
import { useEffect, useState } from "react";
import Item from './item'; 

export const List = ({ users }) => {

    useEffect(() => {
      console.log("List render");
    });

  return (
    <ul>
      {users.map((user, index) => (
        <Item key={index} user={user} />
      ))}
    </ul>
  );
};
