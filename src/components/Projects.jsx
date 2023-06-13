import { projects_data } from '../app/data';
import ProjectItem from './ProjectItem';

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
