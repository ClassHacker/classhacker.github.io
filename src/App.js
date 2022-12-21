import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { LandingIcons } from './component/LandingIcons';

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
        {/* <p className='subtitle'>
          For more information, have a look at my <a className='highlight-link' href="public/resume.txt" download="Resume.txt">resume</a>
        </p> */}
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
                {/* <div className='neumorphism-card-mid'> */}
                  <div className="desc neumorphism-card" data-aos="zoom-in-left">
                    Full Stack Developer
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
                          <span className="tag neumorphism-card">Jira</span>
                          <span className="tag neumorphism-card">Bitbucket</span>
                      </div>
                  </div>
                  {/* <div className="desc neumorphism-card" data-aos="zoom-in-left">
                    Tools
                      <div className="tag-wrapper">
                          <span className="tag neumorphism-card">VS Code</span>
                          <span className="tag neumorphism-card">STS</span>
                          <span className="tag neumorphism-card">POSTMAN</span>
                      </div>
                  </div> */}
                {/* </div> */}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;