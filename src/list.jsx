import React from 'react';
import Item from './item'; 

export const List = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <Item key={index} user={user} />
      ))}
    </ul>
  );
};
