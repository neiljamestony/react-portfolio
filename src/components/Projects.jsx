import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects_data } from '../app/data';
import ProjectItem from './ProjectItem';

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
      {projects_data.map((proj, key) => {
        return <ProjectItem key={key} {...proj} />;
      })}
    </div>
  );
}
