import PHIcon from '../assets/img/philippines.png';

export default function Experience() {
  return (
    <div className='experience'>
      <div className='experience-title'>EXPERIENCE</div>
      <div className='experience-content'>
        <div className='experience-duration'>2021 - 2022</div>
        <div className='experience-location'>
          i4ONE INC.
          <img src={PHIcon} alt='ph-icons' height={20} />
        </div>
        <div className='experience-position'>FRONT-END DEVELOPER</div>
        <div className='experience-job-description'>
          Developed a social-media-like application for professionals, where you
          can apply or hire a professionals thru job posting, download CV and
          upload photos.
        </div>
        <div className='tech-container'>
          <div className='tech'>ReactJS</div>
          <div className='tech'>Redux</div>
          <div className='tech'>AWS Serverless</div>
          <div className='tech'>Material UI</div>
          <div className='tech'>PostgresSQL</div>
        </div>
      </div>
      <div className='experience-content'>
        <div className='experience-duration'>2019 - 2021</div>
        <div className='experience-location'>
          AKTUS GLOBAL MANAGEMENT INC.
          <img src={PHIcon} alt='ph-icons' height={20} />
        </div>
        <div className='experience-position'>WEB DEVELOPER</div>
        <div className='experience-job-description'>
          Migrated internal systems to modern technologies, collaboration with
          graphic designers to translate designs into functional code. I
          conducted rigorous testing and debugging to fix issues and bugs.
          Implementing responsive design principles enabled optimal performance
          across various devices. I developed systems, prioritized
          documentation, and followed agile and scrum methodologies to ensure
          efficient project management and teamwork.
        </div>
        <div className='tech-container'>
          <div className='tech'>Laravel</div>
          <div className='tech'>PHP</div>
          <div className='tech'>MySQL</div>
          <div className='tech'>Bootstrap</div>
          <div className='tech'>JavaScript</div>
        </div>
      </div>
    </div>
  );
}
