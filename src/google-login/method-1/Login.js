import React from 'react';
import {GoogleLogin} from 'react-google-login';

const clientId="821587208694-nq0ttdb93jo7ih3lm7rhe56190927qub.apps.googleusercontent.com";

const Login = () => {

    const onSuccess = (res)=>{
        console.log('[LOGIN SUCCESS] currentUser : ', res.profileObj);
    };

    const onFailure= (res)=>{
        console.log('[LOGIN FAILED] res : ',res);
    }
  return (
    <div id="signInButton">
      <GoogleLogin
      clientId={clientId}
      buttonText={'Login'}
      onSuccess={onSuccess}
      onFailure={onFailure}
      style={{marginTop:"100px"}}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true} 
      />
    </div>
  )
}

export default Login
