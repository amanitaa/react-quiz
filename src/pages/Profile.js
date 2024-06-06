import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { name } = useParams();
  return (
    <div className="profile">
      <h1>{`Made by ${name || 'tornike'}`}</h1>
    </div>
  );
};

export default Profile;
