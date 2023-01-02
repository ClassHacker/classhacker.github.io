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
          <Icons type='landing-icons' />
        </div>
      </div>
      <div className='layout'>
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
      <footer class="footer">
        <p>
          &copy; 2023 ClassHacker
        </p>
        <p>
          <a class="highlight-link" href="https://github.com/ClassHacker/classhacker.github.io" target="_blank" rel="noreferrer">
            Published
          </a>
          with
          <a class="highlight-link" href="https://pages.github.com/" target="_blank" rel="noreferrer">
            GitHub Pages
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
