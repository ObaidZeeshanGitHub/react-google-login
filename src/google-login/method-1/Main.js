import React,{useEffect} from 'react';
import Login from './Login';
import Logout from './Logout';
import { gapi } from 'gapi-script';

const clientId="821587208694-nq0ttdb93jo7ih3lm7rhe56190927qub.apps.googleusercontent.com";

const App = () => {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  })
  return (
    <div>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
