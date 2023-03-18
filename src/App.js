import './App.scss';
import { Flash } from './component/styled/Sdiv';
import { Icons } from './component/Icons';
import { Portfolio } from './component/Projects';
import { Experience } from './component/Experience';
import { Skills } from './component/Skills';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {
  return (
    <>
      <div id='landing'>
        <div className='landing-title'>
          <h1>
            Hi, I'm <span className='highlight-title'>Ajay Dayma</span>
          </h1>
          <Flash>
            Full Stack Developer
          </Flash>
          <Icons type='landing-icons' />
        </div>
      </div>
      <div className='layout'>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
          <Experience />
        </AnimationOnScroll>
        {/* <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__slideOutRight"> */}
          <Portfolio />
        {/* </AnimationOnScroll> */}
        <AnimationOnScroll animateIn="animate__bounceInDown" animateOut="animate__bounceOutUp">
          <Skills />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutDown">
          <Contact/>
        </AnimationOnScroll>
      </div>
      {/* <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut" offset={75}> */}
        <Footer/>
      {/* </AnimationOnScroll> */}
    </>
  );
}

export default App;
