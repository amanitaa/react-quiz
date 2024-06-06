import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{`Made by ${name || 'Tornike'}`}</h1>
    </div>
  );
};

export default Profile;
