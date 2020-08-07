import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

import { PageHeader, TutorItem, Select, Input, Tutor } from '../../components';

function TutorList() {
  const [classes, setClasses] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    async function loadClasses() {
      const response = await api.get('classes');

      setClasses(response.data);
    }

    loadClasses();
  }, []);

  async function searchClasses(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setClasses(response.data);
  }

  return (
    <div id='page-tutor-list' className='container'>
      <PageHeader title='These are the Proffys available'>
        <form id='search-tutors' onSubmit={searchClasses}>
          <Select
            name='subject'
            label='Matéria'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Arts' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Filosofia', label: 'Filosofia' },
            ]}
          />
          <Select
            name='week_day'
            label='Week Day'
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
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
            type='time'
            name='time'
            label='Hour'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </PageHeader>

      <main>
        {classes.map((tutor: Tutor) => (
          <TutorItem key={tutor.id} tutor={tutor} />
        ))}
      </main>
    </div>
  );
}

export default TutorList;
