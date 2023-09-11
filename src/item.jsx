import React from 'react'


function Item({user}) {
  return (
    <div>
      <li>
        {"User ID: " + user.id}
        {user.name}
        
      </li>
    </div>
  )
}

export default Item