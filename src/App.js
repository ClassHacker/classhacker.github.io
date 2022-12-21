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
        <p className='subtitle'>
          For more information, have a look at my <a className='highlight-link' href="public/resume.txt" download="Resume.txt">resume</a>
        </p>
        <div>
          <ul>
            <li>
              <div>
                
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