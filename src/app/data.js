import QuizApp from '../assets/img/quiz-app-banner.png';
import TodoApp from '../assets/img/todo-app-banner.png';
import ExtractorApp from '../assets/img/extractor-app-banner.png';
import HyperionApp from '../assets/img/hyperion-app-banner.png';
import MyportfolioApp from '../assets/img/myportfolio-app.png';
import AMSApp from '../assets/img/ams-app-banner.jpg';
//TESTIMONIALS
import AceImg from '../assets/img/ace-img.png';
import BersImg from '../assets/img/bers-img.png';
import MikeImg from '../assets/img/mike-img.png';

export const experience_data = [
  {
    duration: `2021 - 2022`,
    location: `i4ONE INC.`,
    position: `FRONT-END DEVELOPER`,
    jd: `Developed a social-media-like application for professionals, where you
        can apply or hire a professionals thru job posting, download CV and
        upload photos.`,
    techs: [`ReactJS`, `Redux`, `AWS Serverless`, `Material UI`, `PostgreSQL`],
  },
  {
    duration: `2019 - 2021`,
    location: `AKTUS GLOBAL MANAGEMENT INC.`,
    position: `WEB DEVELOPER`,
    jd: `Migrated internal systems to modern technologies, collaboration with
        graphic designers to translate designs into functional code. I
        conducted rigorous testing and debugging to fix issues and bugs.
        Implementing responsive design principles enabled optimal performance
        across various devices. I developed systems, prioritized
        documentation, and followed agile and scrum methodologies to ensure
        efficient project management and teamwork.`,
    techs: [`Laravel`, `PHP`, `MySQL`, `Bootstrap`, `JavaScript`],
  },
];

export const projects_data = [
  {
    icon: QuizApp,
    projectName: 'Quiz App',
    link: `https://quiz-daily.netlify.app/`,
    pd: `a simple Quiz application where you can test your knowledge
        within 3 topics. the topics are Animals, Philippine History and
        Science. with user authentication, round and answer validation
        and scoring system.`,
    techs: ['ReactJS', 'TypeScript', 'Styled Components', 'Netlify'],
  },
  {
    icon: HyperionApp,
    projectName: 'Hyperion',
    link: `https://github.com/neiljamestony/hyperion`,
    pd: `an e-commerce website for selling high-end laptops with
        authentication, cart functionality , and checkout functionality
        with receipt.`,
    techs: ['PHP', 'HTML', 'CSS', 'MySQL', 'Bootstrap'],
  },
  {
    icon: ExtractorApp,
    projectName: 'Extractor',
    link: `https://extractor-tau.vercel.app/`,
    pd: `application where you can extract text from image.`,
    techs: ['ReactJS', 'TesseractJS'],
  },
  {
    icon: AMSApp,
    projectName: 'AMS',
    link: `https://github.com/neiljamestony/spml_ams`,
    pd: `Attendance management system with user authentication, time-in
        and time out functionality, where you can download or view your
        Daily Time Record.`,
    techs: ['Laravel', 'Bootstrap'],
  },
  {
    icon: TodoApp,
    projectName: 'Todo Application',
    link: `https://mern-todo-fe.vercel.app/`,
    pd: `a simple todo application with user authentication, create,
        read, update, delete and search functionality of todo.`,
    techs: ['ReactJS', 'Styled Components', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
  {
    icon: MyportfolioApp,
    projectName: 'My Portfolio - v1',
    link: `https://neiljamestony.netlify.app/`,
    pd: `my summary of work experiences, educational backgrounds,
        personal projects information.`,
    techs: ['HTML', 'CSS', 'ReactJS'],
  },
];

export const testimonials = [
  {
    fb: `I had the privilege of working alongside James for several months, and I can confidently say that he is an exceptional programmer.He is not only highly skilled but also an excellent team player, always willing to offer his expertise and support to others. His positive attitude, strong work ethic, and attention to detail made him an asset to the team.`,
    icon: AceImg,
    name: 'Leonardo Victorio',
    pstn: 'Web Content Manager',
  },
  {
    fb: `I had the pleasure of working alongside James at our previous company,and I must say that he were an exceptional developer.His commitment to delivering excellence was evident in every aspect of his work.I have no doubt that he will continue to excel in his career as a developer and make significant contributions to any future projects he undertake.`,
    icon: BersImg,
    name: 'John Ree Vergara',
    pstn: 'Solutions Architect',
  },
  {
    fb: `I witnessed his remarkable growth and commitment firsthand. he consistently exceeded my expectations, showcasing exceptional skills and making valuable contributions. I have no doubt that Neil will thrive in any endeavor.`,
    icon: MikeImg,
    name: 'Michael Antoni',
    pstn: 'Senior Software Engineer',
  },
];
