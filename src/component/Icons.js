import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faLinkedinIn, faGithub, faStackOverflow, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Icons (props) {
  return (
      <div className={props.type}>
        <a className="social-link linkedin" aria-label="My LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/classhacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faLinkedinIn} className="social-svg" />
          </div>
          <span className="label">LinkedIn</span>
        </a>
        <a className="social-link email" aria-label="My E-Mail" href="mailto:ajaykeer1401@gmail.com">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faEnvelope} className="social-svg" />
          </div>
          <span className="label">E-Mail</span>
        </a>
        <a className="social-link github" aria-label="My Github" target="_blank" rel="noreferrer" href="https://github.com/ClassHacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faGithub} className="social-svg" />
          </div>
          <span className="label">Github</span>
        </a>
        <a className="social-link stackoverflow" aria-label="My StackOverflow" target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/12500840/classhacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faStackOverflow} className="social-svg" />
          </div>
          <span className="label">StackOverflow</span>
        </a>
        <a className="social-link telegram" aria-label="My Telegram" target="_blank" rel="noreferrer" href="https://t.me/classhacker">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faTelegram} className="social-svg" />
          </div>
          <span className="label">Telegram</span>
        </a>
        {/* <a className="social-link whatsapp" aria-label="My Whatsapp" target="_blank" rel="noreferrer" href="https://wa.me/+919770311779">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faWhatsapp} className="social-svg" />
          </div>
          <span className="label">Whatsapp</span>
        </a> */}
        <a className="social-link instagram" aria-label="My Instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/ajay_dayma_1401/">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faInstagram} className="social-svg" />
          </div>
          <span className="label">Instagram</span>
        </a>
      </div>
  );
}
