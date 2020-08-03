import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import './style.css';

import { Study, GiveClasses, Heart } from '../../assets/images/icons';

const Landing = () => {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Your Favorite Online Learning Platform</h2>
        </div>

        <img src={landingImg} alt='Online Learning' className='hero-image' />

        <div className='buttons-container'>
          <a href='#' className='study'>
            <img src={Study} alt='Study' /> Study
          </a>

          <a href='#' className='study'>
            <img src={GiveClasses} alt='giveclasses' /> Be a Tutor
          </a>
        </div>

        <span className='total-connections'>
          Over 200 connections already made <img src={Heart} alt='heart' />
        </span>
      </div>
    </div>
  );
};

export default Landing;
