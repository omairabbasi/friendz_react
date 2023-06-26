import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuccessComponent from './components/signinSuccess';

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/success" component={SuccessComponent} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default Routes;
