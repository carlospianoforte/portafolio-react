import React from 'react';
import '../assets/styles/components/Skills.scss';
/* import { ReactComponent as Html } from '../assets/static/logos/html.svg';
import { ReactComponent as Css } from '../assets/static/logos/css.svg';
import { ReactComponent as Sass } from '../assets/static/logos/sass.svg'; */
/* import Js from '../assets/static/logos/js.svg';
 *//* import { ReactComponent as ReactLogo } from '../assets/static/logos/react.svg';
import { ReactComponent as Git } from '../assets/static/logos/git.svg';
import { ReactComponent as Phyton } from '../assets/static/logos/python.svg';
import { ReactComponent as Java } from '../assets/static/logos/java.svg'; */
import { ReactComponent as Cplusplus } from '../assets/static/logos/c++.svg';


const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-title'>

        <section id='skills' className='skills'>
          <div className='container'>
            <div className='skills-title'>
              <h2>Skills</h2>
              <p>
              Software Developer with experience in web technologies and engineering services.
              I am currently working at HMV as a Electronic Designer. For +4 years I have worked as a control &amp;
              protection engineer also, I have been studying for +1 year in order to become a frontend developer
              with the aim of helping companies, start-ups and institutions to achieve their commercial objectives
              with productive designs and applications.

              </p>
            </div>
          </div>
        </section>

      </div>
      <div className='skills-container'>
        <div className='row'>
          <div className='col-6 col-sm-4'><Cplusplus/></div>
          <div className='col-6 col-sm-4'>tocas</div>
          <div className='col-6 col-sm-4'>tocas</div>
          <div className='col-6 col-sm-4'>tocas</div>
          <div className='col-6 col-sm-4'>tocas</div>
          <div className='col-6 col-sm-4'>tocas</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
