import React from 'react';
import { PageHeader, Input, TextArea } from '../../components';

import './styles.css';

import { Warning } from '../../assets/images/icons';

function TutorForm() {
  return (
    <div id='page-tutor-form' className='container'>
      <PageHeader
        title='Be someone Tutor right now...'
        description='Your first step is to fill this form'
      />

      <main>
        <fieldset>
          <legend>Your Information</legend>
          <Input name='name' label='Nome Completo' />
          <Input name='avatar' label='Avatar' />
          <Input name='whatsapp' label='Whatsapp' />
          <TextArea name='bio' label='Biografia' />
        </fieldset>

        <div className='input-block'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' id='name' />
        </div>
        <div className='input-block'>
          <label htmlFor='avatar'>Avatar</label>
          <input type='text' id='avatar' />
        </div>
        <div className='input-block'>
          <label htmlFor='whatsapp'>WhatsApp</label>
          <input type='text' id='whatsapp' />
        </div>
      </main>
    </div>
  );
}

export default TutorForm;
