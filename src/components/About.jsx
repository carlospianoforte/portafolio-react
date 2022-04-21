import React from 'react';
import '../assets/styles/components/About.scss';
import yo2 from '../assets/static/yo2.jpg';


const About = () => {
  return (


    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>
              Software Developer with experience in web technologies and engineering services. 
              I am currently working at HMV as a Electronic Designer. For +4 years I have worked as a control &amp; 
              protection engineer also, I have been studying for +1 year in order to become a frontend developer 
              with the aim of helping companies, start-ups and institutions to achieve their commercial objectives 
              with productive designs and applications.

            I'm proactive and I like learning new things, currently improving my functional programming 
            skills. I hope you see some of my projects below!
            </p>
        </div>

        <div className="row">
          <div className="col-lg-3" id="about-image" data-aos="fade-right">
            <img src={yo2} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-9 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Control Protection Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
                Some contact details and personal information
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>ICard:</strong> <span>1017168645</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.carlospianoforte.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+57 319 362 3888</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Medellín, COLOMBIA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Marital Status</strong> <span>Single</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engineer Expert</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>carlospianiforte@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
                Electrical and electronic engineer with a postgraduate degree in project management graduated from 
                the Bolivarian Pontifical University.
                I have worked on several engineering projects for various countries in Latin America and the 
                United States.
            </p>
          </div>
        </div>

      </div>
    </section>


  );
};

export default About;
