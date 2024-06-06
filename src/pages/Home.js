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
      <div className="hero-container">
        <img src="https://via.placeholder.com/1600x900" alt="Hero" className="hero-image" />
        <button onClick={handleGalleryRedirect} className="gallery-button">Go To Gallery</button>
      </div>
    </div>
  );
};

export default Home;
