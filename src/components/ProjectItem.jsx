/* eslint-disable react/prop-types */
import RedirectIcon from '../assets/img/share.png';
export default function ProjectItem({ icon, projectName, link, pd, techs }) {
  return (
    <div className='project-item'>
      <div className='project-item-sub-container'>
        <div className='project-item-padding'>
          <img src={icon} alt='quiz-app-banner' height={100} />
        </div>
        <div className='project-item-padding'>
          <div className='project-header-container'>
            <div className='project-name'>{projectName}</div>
            <div>
              <a href={link} target='_blank' rel='noreferrer'>
                <img src={RedirectIcon} alt='redirect-icon' height={20} />
              </a>
            </div>
          </div>
          <div className='project-description'>{pd}</div>
        </div>
      </div>
      <div className='tech-container'>
        {techs?.map((tech, key) => {
          return (
            <div className='tech' key={key}>
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
}
