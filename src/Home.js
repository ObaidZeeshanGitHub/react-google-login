import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid bg-secondary'>
      <div className='row'>
      <div className='col-lg-6'>
      <h2 className='text-center'>Google Sign In Options</h2>
      <hr/>
      <div className='text-center'>
        <div className='p-3'>
            <Link to="/google-m-1"><button className='btn btn-lg btn-success'>Google Sign In Method 1</button></Link>
        </div>
        <div className='p-3'>
            <Link to="/google-m-2"><button className='btn btn-lg btn-success'>Google Sign In Method 1</button></Link>
        </div>
      </div>
      </div>
      <div className='col-lg-6'>
      <h2 className='text-center'>Facebook Sign In Options</h2>
      <hr/>
      <div className='text-center'>
        <div className='p-3'>
            <Link to="/facebook-m-1"><button className='btn btn-lg btn-success'>Facebook Sign In Method 1</button></Link>
        </div>
      </div>
      <div className='text-center'>
        <div className='p-3'>
            <Link to="/facebook-m-2"><button className='btn btn-lg btn-success'>Facebook Sign In Method 2</button></Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
