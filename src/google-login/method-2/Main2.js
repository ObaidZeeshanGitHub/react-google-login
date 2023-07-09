import React from 'react';
import Login from './Login';
import { GoogleOAuthProvider  } from '@react-oauth/google';

const Main2 = () => {
  return (
    <div>
     <GoogleOAuthProvider clientId="821587208694-nq0ttdb93jo7ih3lm7rhe56190927qub.apps.googleusercontent.com">
      <Login/>
      </GoogleOAuthProvider>
    </div>
  )
}

export default Main2
