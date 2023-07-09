import React from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Home';
import Main from "./google-login/method-1/Main";
import Main2 from './google-login/method-2/Main2';
import Main3 from './facebook-login/method-1/Main3';
import Main4 from './facebook-login/method-2/Main4';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/google-m-1" element={<Main/>}/>
          <Route path="/google-m-2" element={<Main2/>}/>
          <Route path="/facebook-m-1" element={<Main3/>}/>
          <Route path="/facebook-m-2" element={<Main4/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
