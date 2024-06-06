import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGalleryRedirect = () => {
    navigate('/gallery');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <img src="https://via.placeholder.com/600x400" alt="Hero" />
      <button onClick={handleGalleryRedirect}>Go To Gallery</button>
    </div>
  );
};

export default Home;
