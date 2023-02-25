
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function Experience() {

    const cse = ['C', 'C++', 'Python', 'HTML', 'CSS', 'Bootstrap', 'JavaScript',
      'Data Structure', 'Object Oriented Programming', 'Software Engineering',
      'Communication', 'Problem Solving', 'Visual Studio Code'];

    return (
        <section className='card neumorphism-card-big'>
        <h1 className='title'>Education & Experience</h1>
        <div className='timeline-wrapper'>
          <ul className='timeline'>
            <li>
              <div className='direction-r'>
                <AnimationOnScroll animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
                  <div className='flag-wrapper'>
                    <span className='hexagon'></span>
                    <span className='flag neumorphism-button' data-aos="zoom-in-left">
                      <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
                        <span>Tata Consultancy Services</span>
                      </a>
                    </span>
                    <span className='time-wrapper' data-aos="zoom-in-left">
                      <span className='time neumorphism-card'>Aug 2021 - Present</span>
                    </span>
                  </div>
                  <div className='neumorphism-card-mid'>
                    Full Stack Developer
                    <div className="desc neumorphism-card" data-aos="zoom-in-left">
                      Framework & Languages
                        <div className="tag-wrapper">
                            <span className="tag neumorphism-card">React</span>
                            <span className="tag neumorphism-card">Node</span>
                            <span className="tag neumorphism-card">Express</span>
                            <span className="tag neumorphism-card">Jest</span>
                            <span className="tag neumorphism-card">Spring boot</span>
                            <span className="tag neumorphism-card">Java 8</span>
                            <span className="tag neumorphism-card">Junit</span>
                            <span className="tag neumorphism-card">Mockito</span>
                            <span className="tag neumorphism-card">Cucumber</span>
                        </div>
                    </div>
                    <div className="desc neumorphism-card" data-aos="zoom-in-left">
                      IDEs & Tools
                        <div className="tag-wrapper">
                            <span className="tag neumorphism-card">Visual Studio Code</span>
                            <span className="tag neumorphism-card">Spring Tool Suit</span>
                            <span className="tag neumorphism-card">Intellij IDEA</span>
                            <span className="tag neumorphism-card">Postman</span>
                            <span className="tag neumorphism-card">Splunk</span>
                            <span className="tag neumorphism-card">Jira</span>
                            <span className="tag neumorphism-card">Bitbucket</span>
                            <span className="tag neumorphism-card">Bamboo</span>
                            <span className="tag neumorphism-card">AWS</span>
                        </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            </li>
            <li>
              <div className='direction-l'>
                <AnimationOnScroll animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
                  <div className='flag-wrapper'>
                    <span className='hexagon'></span>
                    <span className='flag neumorphism-button' data-aos="zoom-in-left">
                      <a href="https://bce.ac.in/" target="_blank" rel="noreferrer">
                        <span>Bansal College Of Engineering</span>
                      </a>
                    </span>
                    <span className='time-wrapper' data-aos="zoom-in-left">
                      <span className='time neumorphism-card'>July 2017 - July 2021</span>
                    </span>
                  </div>
                  <div className='neumorphism-card-mid'>
                  Bachelor of Technology
                    <div className="desc neumorphism-card" data-aos="zoom-in-left">
                        Computer Science Engineering
                        <div className="tag-wrapper">
                          {
                            cse.map((value, i) =>
                              (<span key={i} className="tag neumorphism-card">{value}</span>)
                            )
                          }
                        </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
}
