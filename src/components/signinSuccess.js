import React from 'react';
import { Link } from 'react-router-dom';

const SuccessComponent = () => {
  return (
    <div>
      <h1>You have successfully signed up dude!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default SuccessComponent;
