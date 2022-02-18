import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';
import education from '../../assets/Resume/education.svg';
import workHistory from '../../assets/Resume/work-history.svg';
import programmingSkills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import interests from '../../assets/Resume/interests.svg';
// `}

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: 'Education', logoSrc: education },
    { label: 'Work History', logoSrc: workHistory },
    { label: 'Programming Skills', logoSrc: programmingSkills },
    { label: 'Projects', logoSrc: projects },
    { label: 'Interests', logoSrc: interests },
  ];
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 60 },
    { skill: 'TypeScript', ratingPercentage: 50 },
    { skill: 'React JS', ratingPercentage: 60 },
    { skill: 'Express JS', ratingPercentage: 60 },
    { skill: 'Node JS', ratingPercentage: 60 },
    { skill: 'Mongo Db', ratingPercentage: 50 },
    { skill: 'Docker', ratingPercentage: 30 },
    { skill: 'HTML', ratingPercentage: 80 },
    { skill: 'CSS', ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: 'MERN eCommerce',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'An ecommerce application designed to sell products online with payment system integration',
      subHeading:
        'Build an eCommerce platform from the ground up with React, Redux, Express & MongoDB',
    },
    {
      title: 'Ecommerce Website ',
      duration: { fromDate: '2021', toDate: '2021' },
      description: 'Microservices with Node JS and React',
      subHeading:
        'Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes.',
    },
  ];
  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={
          'Tadeusz Kościuszko Mechanical and Electrical School Complex in Rybnik,'
        }
        subHeading={'Electrician Technician'}
        fromDate={'2008'}
        toDate={'2012'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={'Piotrek Technoloy'}
          subHeading={'Electric / Energetic'}
          fromDate={'2021'}
          toDate={'Present'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            Electromechanic at Doosan Babcock Energy Polska. Work in departament
            control and measurement equipment and automatics
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            Work in polish energetic group, handling energetic block.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */

    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Coding'
        description='study to understand world and expand their horizons'
      />
      <ResumeHeading
        heading='Traveling'
        description='Travel around the world, study languages, culture and art. '
      />
      <ResumeHeading
        heading='Workout'
        description='cycling and bodybuilding for keep healthy condition.'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img className='bullet-logo' src={bullet.logoSrc} alt='oppsss' />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className='resume-container screen-container fade-in }'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
