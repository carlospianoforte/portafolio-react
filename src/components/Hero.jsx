import React from 'react';
import '../assets/styles/components/Hero.scss';
import Typewriter from 'typewriter-effect';
import yo from '../assets/static/yo.png';

const Hero = () => {

  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>
          Hi, I'm
          {' '}
          <strong>Carlos Ortíz</strong>
          {' '}
          <br />

          <Typewriter
            options={{
              strings: ['Electrical Engineer', 'Electronic Engineer', 'Frontend Developer'],
              autoStart: true,
              pauseFor: 2000,
              loop: true,
            }}
          />
        </h1>


      </div>

      <div className='hero-figure'>
        <img src={yo} alt='me' />
      </div>

    </div>
  );
};

export default Hero;
