import React from 'react';
import { PageHeader, Input, TextArea, Select } from '../../components';

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

        <fieldset>
          <legend>About the Class</legend>
          <Select
            name='subject'
            label='Subject'
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Physics', label: 'Physics' },
              { value: 'German', label: 'German' },
              { value: 'Math', label: 'Math' },
              { value: 'English', label: 'English' },
              { value: 'Programmation', label: 'Programmation' },
            ]}
          />
          <Input name='cost' label='How much will cost your hour per lesson?' />
        </fieldset>

        <fieldset>
          <legend>
            Availability
            <button type='button'>+ New time</button>
          </legend>

          <div className='schedule-item'>
            <Select
              name='week_day'
              label='Days of the week'
              options={[
                { value: '0', label: 'Sunday' },
                { value: '1', label: 'Monday' },
                { value: '2', label: 'Tuesday' },
                { value: '3', label: 'Wednesday' },
                { value: '4', label: 'Thursday' },
                { value: '5', label: 'Friday' },
                { value: '6', label: 'Saturday' },
              ]}
            />
            <Input name='from' label='From' type='time' />
            <Input name='to' label='To' type='time' />
          </div>
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
