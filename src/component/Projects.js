
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function Portfolio() {
  return (
    <section className='card neumorphism-card-big'>
      <h1 className='title'>Portfolio Projects</h1>
      <div className='projects-wrapper'>
        <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut" duration={2} offset={100}>
          <div className='project neumorphism-card-mid'>
            <div className="name-link-wrapper">
              <a color='blue' href="https://classhacker.github.io/tic-tac-toe/" target="_blank" rel="noreferrer">
                <h3>tic-tac-toe</h3>
              </a>
            </div>
            <p className='project-desc'>A simple tic-tac-toe game</p>
            <a className='highlight-link' href="https://github.com/ClassHacker/tic-tac-toe"
              target="_blank" rel="noreferrer">GitHub</a>
            <div className="tag-wrapper">
              <span className="tag neumorphism-card">react</span>
              <span className="tag neumorphism-card">react-redux</span>
              <span className="tag neumorphism-card">react-bootstrap</span>
              <span className="tag neumorphism-card">sass</span>
              <span className="tag neumorphism-card">jest</span>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut" duration={2} offset={100}>
          <div className='project neumorphism-card-mid'>
            <div className="name-link-wrapper">
              <a href="https://classhacker.github.io/" target="_blank" rel="noreferrer">
                <h3>classhacker.github.io</h3>
              </a>
            </div>

            <p className='project-desc'>Private Webpage</p>
            <a className='highlight-link' href="https://github.com/ClassHacker/classhacker.github.io"
              target="_blank" rel="noreferrer">GitHub</a>
            <div className="tag-wrapper">
              <span className="tag neumorphism-card">react</span>
              <span className="tag neumorphism-card">react-animation</span>
              <span className="tag neumorphism-card">styled-components</span>
              <span className="tag neumorphism-card">sass</span>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}