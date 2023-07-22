import React from 'react';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label_1">Followers</span>
          <span className="quantity_1">{stats.followers}</span>
        </li>
        <li>
          <span className="label_2">Views</span>
          <span className="quantity_2">{stats.views}</span>
        </li>
        <li>
          <span className="label_3">Likes</span>
          <span className="quantity_3">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
