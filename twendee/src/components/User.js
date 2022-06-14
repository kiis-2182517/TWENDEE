import React from 'react'
import './user/user.css'
const user = ({ user }) => {
  return (
    <div class="item">
      <div class="img">
        <img src={user.picture.large} alt=""></img>
      </div>
      <div class="text">
        <p><span>Full Name:</span>{user.name.first} {user.name.last}</p>
        <p><span>Username:</span>{user.login.username}</p>
      </div>
    </div>
  )
}

export default user