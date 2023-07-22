import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="friend-item">
    <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

const FriendsList = ({ friends }) => (
  <ul className='friend-list'> 
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

export default FriendsList;