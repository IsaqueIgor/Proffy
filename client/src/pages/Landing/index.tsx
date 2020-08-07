import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import './style.css';

import { Study, GiveClasses, Heart } from '../../assets/images/icons';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function getConnections() {
      const { data } = await api.get('/connections');
      setTotalConnections(data.total);
    }

    getConnections();
  }, []);

  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Your Favorite Online Learning Platform</h2>
        </div>

        <img src={landingImg} alt='Online Learning' className='hero-image' />

        <div className='buttons-container'>
          <Link to='/study' className='study'>
            <img src={Study} alt='Study' /> Study
          </Link>

          <Link to='/give-classes' className='give-classes'>
            <img src={GiveClasses} alt='giveclasses' /> Be a Tutor
          </Link>
        </div>

        <span className='total-connections'>
          Over {totalConnections} connections already made{' '}
          <img src={Heart} alt='heart' />
        </span>
      </div>
    </div>
  );
};

export default Landing;
