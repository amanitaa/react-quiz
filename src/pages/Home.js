import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGalleryRedirect = () => {
    navigate('/gallery');
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <img src="https://via.placeholder.com/600x400" alt="Hero" className="hero-image" />
      <button onClick={handleGalleryRedirect} className="gallery-button">Go To Gallery</button>
    </div>
  );
};

export default Home;
