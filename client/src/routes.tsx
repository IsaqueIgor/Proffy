import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Landing, TutorList, TutorForm } from './pages';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/study' exact component={TutorList} />
      <Route path='/give-classes' exact component={TutorForm} />
    </BrowserRouter>
  );
}

export default Routes;
