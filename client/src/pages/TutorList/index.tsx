import React from 'react';

import './styles.css';

import { PageHeader, TutorItem } from '../../components';

function TutorList() {
  return (
    <div id='page-tutor-list' className='container'>
      <PageHeader title='These are the Proffys available'>
        <form id='search-tutors'>
          <div className='input-block'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' />
          </div>

          <div className='input-block'>
            <label htmlFor='week_day'>Week Day</label>
            <input type='text' id='week_day' />
          </div>

          <div className='input-block'>
            <label htmlFor='time'>Time</label>
            <input type='text' id='time' />
          </div>
        </form>
      </PageHeader>

      <main>
        <TutorItem />
      </main>
    </div>
  );
}

export default TutorList;
