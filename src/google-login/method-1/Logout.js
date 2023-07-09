import React from 'react';
import {GoogleLogout} from 'react-google-login';

const clientId="821587208694-nq0ttdb93jo7ih3lm7rhe56190927qub.apps.googleusercontent.com";

const Logout = () => {

    const onSuccess = (res)=>{
        console.log("Log Out Successfully");
    };



  return (
    <div>
      <GoogleLogout
      clientId={clientId}
      buttonText={'Logout'}
      onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout;
