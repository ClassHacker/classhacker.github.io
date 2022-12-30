import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { Icons } from './component/Icons';
import { Portfolio } from './component/Projects';
import { Experience } from './component/Experience';
import { Skills } from './component/Skills';
import { Contact } from './component/Contact';

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
          <Icons />
        </div>
      </div>
      <div className='layout'>
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
