import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/images/logo.svg';
import { Back } from '../../assets/images/icons';

function TutorList() {
  return (
    <div id='page-tutor-list' className='container'>
      <header className='page-header'>
        <div className='top-bar-container'>
          <Link to='/'>
            <img src={Back} alt='Back' />
          </Link>
          <img src={logo} alt='Proffy' />
        </div>

        <div className='header-content'>
          <strong>These are the Proffys available</strong>
        </div>
      </header>
    </div>
  );
}

export default TutorList;
