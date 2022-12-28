import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { LandingIcons } from './component/LandingIcons';
import { Portfolio } from './component/Projects';
import { Experience } from './component/Experience';
import { Skills } from './component/Skills';

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
          <LandingIcons />
        </div>
      </div>
      <div className='layout'>
        <Experience />
        <Portfolio />
        {/* <Skills /> */}
      </div>
    </>
  );
}

export default App;
