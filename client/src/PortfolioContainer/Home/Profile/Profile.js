import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className=' profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/Swistekk/'
              >
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='google.com'>
                <i className='fa fa-google-plussquare'></i>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/Swistek92'
              >
                <i class='fa fa-github' aria-hidden='true'></i>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/piotr-swistowski-b47578212/'
              >
                <i class='fa fa-linkedin-square' aria-hidden='true'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello im <span className='highlighted-text'> Piotrek </span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary text'>
              <h1>
                {''}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Ethusiastic Dev 😎 ',
                    1000,
                    'Full Stack Dev 💻',
                    1000,
                    'MERN Dev 📱',
                    1000,
                    'React 🌐',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Construction of applications with front and back end operations{' '}
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {' '}
              Hire me
            </button>
            <a href='Piotrcv.pdf' download='piotr.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
