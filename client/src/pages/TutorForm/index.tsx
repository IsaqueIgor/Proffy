import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { PageHeader, Input, TextArea, Select } from '../../components';

import './styles.css';

import { Warning } from '../../assets/images/icons';

function TutorForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [rating, setRating] = useState(0);

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    await api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      rating,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    });

    alert('Success');
    history.push('/');
  }

  function setScheduleItemValue(pos: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === pos) {
        return { ...scheduleItem, [field]: value };
      }
      return { ...scheduleItem };
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id='page-tutor-form' className='container'>
      <PageHeader
        title='Be someone Tutor right now...'
        description='Your first step is to fill this form'
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your Information</legend>
            <Input
              name='name'
              label='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name='avatar'
              label='Avatar (URL)'
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name='whatsapp'
              label='WhatsApp'
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              name='bio'
              label='Bio'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>About the Class</legend>
            <Select
              name='subject'
              label='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: 'Arts', label: 'Arts' },
                { value: 'Physics', label: 'Physics' },
                { value: 'German', label: 'German' },
                { value: 'Math', label: 'Math' },
                { value: 'English', label: 'English' },
                { value: 'Programmation', label: 'Programmation' },
              ]}
            />
            <Input
              name='cost'
              label='How much will cost your hour per lesson?'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Availability
              <button type='button' onClick={addNewScheduleItem}>
                + New time
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className='schedule-item'>
                <Select
                  name='week_day'
                  label='Days of the week'
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
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
                <Input
                  name='from'
                  label='From'
                  type='time'
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name='to'
                  label='To'
                  type='time'
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={Warning} alt='Important Warining' />
              Please ! <br />
              Fill in all required fields
            </p>
            <button type='submit'>Register</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TutorForm;
