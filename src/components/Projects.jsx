import AOS from 'aos';
import 'aos/dist/aos.css';
import QuizApp from '../assets/img/quiz-app-banner.png';
import TodoApp from '../assets/img/todo-app-banner.png';
import ExtractorApp from '../assets/img/extractor-app-banner.png';
import HyperionApp from '../assets/img/hyperion-app-banner.png';
import MyportfolioApp from '../assets/img/myportfolio-app.png';
import AMSApp from '../assets/img/ams-app-banner.jpg';
import RedirectIcon from '../assets/img/share.png';

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  animatedClassName: 'aos-animate',
  initClassName: 'aos-init', // class applied after initialization
  useClassNames: true,
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
});

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-title'>PROJECTS</div>
      <div className='projects-content'>
        <div className='project-item'>
          <div className='project-item-sub-container'>
            <div className='project-item-padding'>
              <img src={QuizApp} alt='quiz-app-banner' height={100} />
            </div>
            <div className='project-item-padding'>
              <div className='project-header-container'>
                <div className='project-name'>Quiz App</div>
                <div>
                  <a
                    href='https://quiz-daily.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={RedirectIcon} alt='redirect-icon' height={20} />
                  </a>
                </div>
              </div>
              <div className='project-description'>
                a simple Quiz application where you can test your knowledge
                within 3 topics. the topics are Animals, Philippine History and
                Science. with user authentication, round and answer validation
                and scoring system.
              </div>
            </div>
          </div>
          <div className='tech-container'>
            <div className='tech'>ReactJS</div>
            <div className='tech'>TypeScript</div>
            <div className='tech'>Styled Components</div>
            <div className='tech'>Netlify</div>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-sub-container'>
            <div className='project-item-padding'>
              <img src={HyperionApp} alt='quiz-app-banner' height={100} />
            </div>
            <div className='project-item-padding'>
              <div className='project-header-container'>
                <div className='project-name'>Hyperion</div>
                <div>
                  <a
                    href='https://github.com/neiljamestony/hyperion'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={RedirectIcon} alt='redirect-icon' height={20} />
                  </a>
                </div>
              </div>
              <div className='project-description'>
                an e-commerce website for selling high-end laptops with
                authentication, cart functionality , and checkout functionality
                with receipt.
              </div>
            </div>
          </div>
          <div className='tech-container'>
            <div className='tech'>PHP</div>
            <div className='tech'>HTML</div>
            <div className='tech'>CSS</div>
            <div className='tech'>MySQL</div>
            <div className='tech'>Bootstrap</div>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-sub-container'>
            <div className='project-item-padding'>
              <img src={ExtractorApp} alt='quiz-app-banner' height={100} />
            </div>
            <div className='project-item-padding'>
              <div className='project-header-container'>
                <div className='project-name'>Extractor</div>
                <div>
                  <a
                    href='https://extractor-tau.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={RedirectIcon} alt='redirect-icon' height={20} />
                  </a>
                </div>
              </div>
              <div className='project-description'>
                application where you can extract text from image.
              </div>
            </div>
          </div>
          <div className='tech-container'>
            <div className='tech'>ReactJS</div>
            <div className='tech'>TesseractJS</div>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-sub-container'>
            <div className='project-item-padding'>
              <img src={AMSApp} alt='quiz-app-banner' height={100} />
            </div>
            <div className='project-item-padding'>
              <div className='project-header-container'>
                <div className='project-name'>AMS</div>
                <div>
                  <a
                    href='https://github.com/neiljamestony/spml_ams'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={RedirectIcon} alt='redirect-icon' height={20} />
                  </a>
                </div>
              </div>
              <div className='project-description'>
                Attendance management system with user authentication, time-in
                and time out functionality, where you can download or view your
                Daily Time Record.
              </div>
            </div>
          </div>
          <div className='tech-container'>
            <div className='tech'>Laravel</div>
            <div className='tech'>Bootstrap</div>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-sub-container'>
            <div className='project-item-padding'>
              <img src={TodoApp} alt='quiz-app-banner' height={100} />
            </div>
            <div className='project-item-padding'>
              <div className='project-header-container'>
                <div className='project-name'>Todo Application</div>
                <div>
                  <a
                    href='https://github.com/neiljamestony/mern-todo-fe'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={RedirectIcon} alt='redirect-icon' height={20} />
                  </a>
                </div>
              </div>
              <div className='project-description'>
                a simple todo application with user authentication, create,
                read, update, delete and search functionality of todo.
              </div>
            </div>
          </div>
          <div className='tech-container'>
            <div className='tech'>React JS</div>
            <div className='tech'>Styled Components</div>
            <div className='tech'>NodeJS</div>
            <div className='tech'>ExpressJS</div>
            <div className='tech'>MongoDB</div>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-sub-container'>
            <div className='project-item-padding'>
              <img src={MyportfolioApp} alt='quiz-app-banner' height={100} />
            </div>
            <div className='project-item-padding'>
              <div className='project-header-container'>
                <div className='project-name'>My Portfolio - v1</div>
                <div>
                  <a
                    href='https://neiljamestony.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={RedirectIcon} alt='redirect-icon' height={20} />
                  </a>
                </div>
              </div>
              <div className='project-description'>
                my summary of work experiences, educational backgrounds,
                personal projects information.
              </div>
            </div>
          </div>
          <div className='tech-container'>
            <div className='tech'>HTML</div>
            <div className='tech'>CSS</div>
            <div className='tech'>ReactJS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
