import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

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
        <a class="social-link email" aria-label="My E-Mail" href="mailto:ajaydayma1401@gmail.com">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span class="label">E-Mail</span>
        </a>
        <a class="social-link email" aria-label="My E-Mail" href="mailto:ajaydayma1401@gmail.com">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <span class="label">E-Mail</span>
        </a>
        <a class="social-link email" aria-label="My E-Mail" href="mailto:ajaydayma1401@gmail.com">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='white' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span class="label">E-Mail</span>
        </a>
        <svg>
          <circle cx={50} cy={50} r={10} fill="red" />
        </svg>
      </div>
    </div>
  );
}

export default App;
