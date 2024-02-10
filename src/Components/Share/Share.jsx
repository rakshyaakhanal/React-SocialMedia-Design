import React, { useContext } from 'react';
import './Share.scss';
import Image from '../../Assets/img.png';
import Map from '../../Assets/map.png';
import Friend from '../../Assets/friend.png';
import { AuthContext } from '../../Context/AuthContext';


const Share = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className='share'>
      <div className='container'>
        <div className='top'>
          <img
            src={currentUser.profilePic}
            alt=''
          />
          <input type='text' placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <input type='file' id='file' style={{ display: 'none' }} />
            <label htmlFor='file'>
              <div className='item'>
                <img src={Image} alt='' />
                <span>Add Image</span>
              </div>
            </label>
            <div className='item'>
              <img src={Map} alt='' />
              <span>Add Place</span>
            </div>
            <div className='item'>
              <img src={Friend} alt='' />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className='right'>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;