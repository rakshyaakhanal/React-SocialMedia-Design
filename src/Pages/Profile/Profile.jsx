import React from 'react';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../Components/Posts/Posts';
import './Profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className='cover' />

        <img src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
          alt=''
          className='profilePic' />
      </div>

      <div className='profileContainer'>
        <div className='uInfo'>
          <div className='left'>
            <a href='http://facebook.com'>
              <FacebookTwoToneIcon fontSize='medium' />
            </a>

            <a href='http://instagram.com'>
              <InstagramIcon fontSize='medium' />
            </a>

            <a href='http://twitter.com'>
              <TwitterIcon fontSize='medium' />
            </a>

            <a href='http://linkedin.com'>
              <LinkedInIcon fontSize='medium' />
            </a>

            <a href='http://pininterest.com'>
              <PinterestIcon fontSize='medium' />
            </a>
          </div>

          <div className='center'>
            <span>Jane Doe</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon />
                <span>USA</span>
              </div>

              <div className='item'>
                <LanguageIcon />
                <span>rakshya</span>
              </div>
            </div>
            <button>follow</button>
          </div>

          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile;