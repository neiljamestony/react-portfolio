// COMPONENTS
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Testimonials from './Testimonials';
import SocialMedia from './SocialMed';

export default function Home() {
  return (
    <div className='parent-container'>
      <div className='left-container'>
        <div>
          <div className='greet'>Hi!, my names is</div>
          <div className='myName'>Neil James Tony Perdigon</div>
          <div className='myMotto'>I build things for web.</div>
          <p>
            {`I am Software Engineer from Metro
                Manila, Philippines 📍. I'm a self-taught web developer with 4
                years of experience in the field. I have a true passion for
                creating innovative and user-friendly websites. Currently, I'm
                expanding my skillset by diving into backend technologies,
                further enhancing my abilities to build robust and efficient web
                applications. With my combination of experience, dedication, and
                continuous learning, I strive to deliver high-quality solutions
                that meet the needs of both clients and users. i'm currently working as `}
            <b className='current-work-location'>Software Engineer</b> at
            <b className='current-work-location'>
              {' '}
              Accenture Philippines Inc.{' '}
            </b>
          </p>
          <SocialMedia />
        </div>
      </div>
      <div className='right-container'>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Testimonials />
      </div>
    </div>
  );
}
