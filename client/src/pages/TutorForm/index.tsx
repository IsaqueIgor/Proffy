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
          <Input name='name' label='Full Name' />
          <Input name='avatar' label='Avatar (URL)' />
          <Input name='whatsapp' label='Whatsapp' />
          <TextArea name='bio' label='About you' />
        </fieldset>

        <footer>
          <p>
            <img src={Warning} alt='Important Warining' />
            Please ! <br />
            Fill in all required fields
          </p>
          <button type='button'>Register</button>
        </footer>
      </main>
    </div>
  );
}

export default TutorForm;
