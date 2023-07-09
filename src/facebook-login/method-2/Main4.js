import React from 'react';
import FacebookAuth from 'react-facebook-auth';
 
const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>
    Login with facebook
  </button>
);
 
const authenticate = (response) => {
  console.log(response);
  // Api call to server so we can validate the token
};
 
const Main4 = () =>{ 
return(
  <div>
    <h1>Facebook Auth</h1>
    <FacebookAuth
      appId="1439192606878079"
      callback={authenticate}
      component={MyFacebookButton}
    />
  </div>
);
}
 export default Main4;