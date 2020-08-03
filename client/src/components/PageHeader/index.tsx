import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { Back } from '../../assets/images/icons';

import './styles.css';

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <img src={Back} alt='Back' />
        </Link>
        <img src={logo} alt='Proffy' />
      </div>

      <div className='header-content'>
        <strong>{props.title}</strong>
      </div>
    </header>
  );
};

export default PageHeader;
