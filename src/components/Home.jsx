// COMPONENTS
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Testimonials from './Testimonials';

// ICONS
import LinkedIn from '../assets/img/linkedin-logo.png';
import GithubIcon from '../assets/img/github-sign.png';
import InstagramIcon from '../assets/img/instagram.png';

export default function Home() {
  const handleDownload = () => {
    const fileLink =
      'https://drive.google.com/u/0/uc?id=1tl6dA9vVnPFxmEwnvvnIsQ0ZZZxFkIR3&export=download';
    window.open(fileLink, '_blank');
  };

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
          <div className='download-button-container'>
            <button
              className='download-button'
              type='button'
              onClick={handleDownload}
            >
              DOWNLOAD CV
            </button>
          </div>
          <div className='social-media'>
            <a
              href='https://www.linkedin.com/in/neil-james-tony-perdigon-631422207'
              target='_blank'
              rel='noreferrer'
            >
              <img src={LinkedIn} alt='linked-in' height={30} />
            </a>
            <a
              href='https://github.com/neiljamestony'
              target='_blank'
              rel='noreferrer'
            >
              <img src={GithubIcon} alt='github-icon' height={30} />
            </a>
            <a
              href='https://instagram.com/nljmstny?igshid=MzNlNGNkZWQ4Mg=='
              target='_blank'
              rel='noreferrer'
            >
              <img src={InstagramIcon} alt='instagram-icon' height={30} />
            </a>
          </div>
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
