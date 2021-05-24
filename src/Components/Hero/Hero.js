import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-info-con">
          <h1 className="hero-title">Find a Locker</h1>
          <div className="hero-search-field">
            <input type="text" placeholder="Enter City or State" />
            <button className="hero-btn">
              <span className="btn-find">Find Locker</span>
              <span className="btn-naira">One Naira For First Rent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
