import React from 'react';
import api from '../../services/api';

import { Whatsapp, Star } from '../../assets/images/icons';

import './styles.css';

export interface Tutor {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  rating: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TutorItemProps {
  tutor: Tutor;
}

const TutorItem: React.FC<TutorItemProps> = ({ tutor }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: tutor.id,
    });
  }

  return (
    <article className='tutor-item'>
      <header>
        <img src={tutor.avatar} alt='Avatar' />
        <div>
          <strong>{tutor.name}</strong>
          <span>{tutor.subject}</span>
        </div>
      </header>

      <p>{tutor.bio}</p>

      <footer>
        <p>
          Price/Hour
          <strong> $ {tutor.cost}</strong>
        </p>
        <a
          rel='noopener noreferrer'
          target='_blank'
          onClick={createNewConnection}
          href={`https://wa.me/${tutor.whatsapp}`}
        >
          <img src={Whatsapp} alt='Whatsapp' />
          Contact Tutor
        </a>
      </footer>
    </article>
  );
};

export default TutorItem;
