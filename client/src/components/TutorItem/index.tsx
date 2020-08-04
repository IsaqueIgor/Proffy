import React from 'react';

import { Whatsapp, Star } from '../../assets/images/icons';

import './styles.css';

const TutorItem: React.FC = (props) => {
  return (
    <article className='tutor-item'>
      <header>
        <div>
          <strong>Isaque Igor</strong>
          <ul className='subject-ratings'>
            <li className='subject'>German</li>
            <li>
              <img className='rating' src={Star} alt='rating' />
            </li>
            <li>5</li>
          </ul>
        </div>
      </header>

      <p>Entusiasta em aprender outros idiomas</p>

      <footer>
        <p>
          Price/Hour
          <strong> U$ 20,00</strong>
        </p>
        <button type='button'>
          <img src={Whatsapp} alt='Whataspp' />
          Contact
        </button>
      </footer>
    </article>
  );
};

export default TutorItem;
