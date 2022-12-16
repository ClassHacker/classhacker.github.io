import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div id='landing'>
      <div className='landing-title'>
        <h1>
          Hi, I'm <span className='highlight-title'>ClassHacker</span>
        </h1>
        <Flash>
          Full Stack Developer
        </Flash>
      </div>
      <div className='landing-icons'>
        <a className="social-link email" aria-label="My E-Mail" href="mailto:ajaydayma1401@gmail.com">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span className="label">E-Mail</span>
        </a>
        <a className="social-link telegram" aria-label="My Telegram" target="_blank" rel="noreferrer" href="https://t.me/classhacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          <span className="label">Telegram</span>
        </a>
        <a className="social-link linkedIn" aria-label="My LinkedIn" target="_blank" rel="noreferrer" href="https://in.linkedin.com/in/classhacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <span className="label">LinkedIn</span>
        </a>
        <a className="social-link github" aria-label="My Github" target="_blank" rel="noreferrer" href="https://github.com/ClassHacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <span className="label">Github</span>
        </a>
        <a className="social-link whatsapp" aria-label="My Whatsapp" target="_blank" rel="noreferrer" href="https://wa.me/+919770311779">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <span className="label">Whatsapp</span>
        </a>

        <svg>
          <circle cx={50} cy={50} r={10} fill="red" />
        </svg>
      </div>
    </div>
  );
}

export default App;
