import React from "react";
import "./Dashboard.css";

const Profile = ({ userData }) => {
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>
        <strong>First Name:</strong> {userData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {userData.lastName}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Favorite Season:</strong> {userData.favoriteSeason}
      </p>
    </div>
  );
};

export default Profile;
