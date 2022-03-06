import React from 'react';
import Login from '../../component/Login/Login';
import Welcome from '../../component/Welcome/Welcome';

import './signIn.css';

const SignIn = () => {
  return (
    <div className="signin-page">
      <Welcome />
      <Login />
    </div>
  )
}

export default SignIn;