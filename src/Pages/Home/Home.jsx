import React from 'react';
import Stories from '../../Components/Stories/Stories';
import Share from '../../Components/Share/Share';
import Posts from '../../Components/Posts/Posts';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home;