import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { LandingIcons } from './component/LandingIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
    <div id='landing'>
      <div className='landing-title'>
        <h1>
          Hi, I'm <span className='highlight-title'>ClassHacker</span>
        </h1>
        <Flash>
          Full Stack Developer
        </Flash>
        <LandingIcons/>
      </div>
    </div>
    <div className='layout'>
      <section className='card neumorphism-card-big'>
        <h1 className='title'>Education & Experience</h1>
        <div className='timeline-wrapper'>
          <ul className='timeline'>
            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='hexagon'></span>
                  <span className='flag neumorphism-button' data-aos="zoom-in-left">
                    <a href="https://tcs.com/" target="_blank" rel="noreferrer">
                      <span>Tata Consultancy Services</span>
                    </a>
                  </span>
                  <span className='time-wrapper' data-aos="zoom-in-left">
                    <span className='time neumorphism-card'>Aug 2021 - Present</span>
                  </span>
                </div>
                <div className='neumorphism-card-mid'>
                  Full Stack Developer
                  <div className="desc neumorphism-card" data-aos="zoom-in-left">
                    Framework & Languages
                      <div className="tag-wrapper">
                          <span className="tag neumorphism-card">ReactJS</span>
                          <span className="tag neumorphism-card">Angular</span>
                          <span className="tag neumorphism-card">NodeJS</span>
                          <span className="tag neumorphism-card">ExpressJS</span>
                          <span className="tag neumorphism-card">Jest</span>
                          <span className="tag neumorphism-card">Spring boot</span>
                          <span className="tag neumorphism-card">Java 8</span>
                          <span className="tag neumorphism-card">Junit</span>
                          <span className="tag neumorphism-card">Mockito</span>
                          <span className="tag neumorphism-card">Cucumber</span>
                          <span className="tag neumorphism-card">AWS</span>
                      </div>
                  </div>
                  <div className="desc neumorphism-card" data-aos="zoom-in-left">
                    IDEs & Tools
                      <div className="tag-wrapper">
                          <span className="tag neumorphism-card">Visual Studio Code</span>
                          <span className="tag neumorphism-card">Spring Tool Suit</span>
                          <span className="tag neumorphism-card">Intellij IDEA</span>
                          <span className="tag neumorphism-card">Postman</span>
                          <span className="tag neumorphism-card">Splunk</span>
                          <span className="tag neumorphism-card">Jira</span>
                          <span className="tag neumorphism-card">Bitbucket</span>
                          <span className="tag neumorphism-card">Bamboo</span>
                      </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='hexagon'></span>
                  <span className='flag neumorphism-button' data-aos="zoom-in-left">
                    <a href="https://bce.ac.in/" target="_blank" rel="noreferrer">
                      <span>Bansal College Of Engineering</span>
                    </a>
                  </span>
                  <span className='time-wrapper' data-aos="zoom-in-left">
                    <span className='time neumorphism-card'>July 2017 - July 2021</span>
                  </span>
                </div>
                <div className='neumorphism-card-mid'>
                Bachelor of Technology
                  <div className="desc neumorphism-card" data-aos="zoom-in-left">
                      Computer Science
                      <div className="tag-wrapper">
                          <span className="tag neumorphism-card">C</span>
                          <span className="tag neumorphism-card">C++</span>
                          <span className="tag neumorphism-card">Python</span>
                          <span className="tag neumorphism-card">HTML</span>
                          <span className="tag neumorphism-card">CSS</span>
                          <span className="tag neumorphism-card">Bootstrap</span>
                          <span className="tag neumorphism-card">JavaScript</span>
                          <span className="tag neumorphism-card">Data Structure</span>
                          <span className="tag neumorphism-card">Object Oriented Programming</span>
                          <span className="tag neumorphism-card">Software Engineering</span>
                          <span className="tag neumorphism-card">Communication</span>
                          <span className="tag neumorphism-card">Problem Solving</span>
                          <span className="tag neumorphism-card">Visual Studio Code</span>
                      </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='card neumorphism-card-big'>
        <h1 className='title'>Portfolio Projects</h1>
        <div className='projects-wrapper'>
          <div className='project neumorphism-card-mid'>
            <div className="name-link-wrapper">
              <h3 color='white'>Tic-Tac-Toe-App</h3>
            </div>
            <div className='project-desc'>A simple tic-tac-toe game</div>
            {/* <div className='landing-icons'>
              <a className="social-link telegram" aria-label="My Telegram" target="_blank" rel="noreferrer" href="https://t.me/classhacker">
                <svg viewBox="0 0 200 200" className="circle">
                  <circle cx="100" cy="100" r="80" fill='null' />
                </svg>
                <div className='social'>
                  <FontAwesomeIcon icon={faGlobe} className="social-svg" />
                </div>
              </a>
            </div> */}
            <div className="tag-wrapper">
                <span className="tag neumorphism-card">react</span>
                <span className="tag neumorphism-card">react-redux</span>
                <span className="tag neumorphism-card">react-bootstrap</span>
                <span className="tag neumorphism-card">sass</span>
                <span className="tag neumorphism-card">jest</span>
            </div>
          </div>
          <div className='project neumorphism-card-mid'>
            <div className="name-link-wrapper">
              <h3 color='white'>classhacker.github.io</h3>
            </div>
            <div className='project-desc'>Private Webpage</div>
            {/* <div className='landing-icons'>
              <a className="social-link telegram" aria-label="My Telegram" target="_blank" rel="noreferrer" href="https://t.me/classhacker">
                <svg viewBox="0 0 200 200" className="circle">
                  <circle cx="100" cy="100" r="80" fill='null' />
                </svg>
                <div className='social'>
                  <FontAwesomeIcon icon={faGlobe} className="social-svg" />
                </div>
              </a>
            </div> */}
            <div className="tag-wrapper">
                <span className="tag neumorphism-card">react</span>
                <span className="tag neumorphism-card">react-animation</span>
                <span className="tag neumorphism-card">styled-components</span>
                <span className="tag neumorphism-card">sass</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;
