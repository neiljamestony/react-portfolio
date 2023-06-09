import { experience_data } from '../app/data';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <div className='experience'>
      <div className='experience-title'>EXPERIENCE</div>
      {experience_data.map((experience, key) => {
        return <ExperienceItem key={key} {...experience} />;
      })}
    </div>
  );
}
