import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      'Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency.With an aspiration to be a strong professional full stack developer ...',
    highlights: {
      bullets: [
        'full stack web',
        'interactive front end as per the design',
        'react',
        'redux for state managment',
        'build rest api',
        'managing database',
      ],
      heading: 'Here are a few Highlights:',
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className='about-me-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'why choose me?'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button
                className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {' '}
                Hire me
              </button>
              <a href='Piotrcv.pdf' download='PiotrCv.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
