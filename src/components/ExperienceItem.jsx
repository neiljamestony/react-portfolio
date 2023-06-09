/* eslint-disable react/prop-types */
import PHIcon from '../assets/img/philippines.png';
export default function ExperienceItem({
  duration,
  location,
  position,
  jd,
  techs,
}) {
  return (
    <div className='experience-content'>
      <div className='experience-duration'>{duration}</div>
      <div className='experience-location'>
        {location}
        <img src={PHIcon} alt='ph-icons' height={20} />
      </div>
      <div className='experience-position'>{position}</div>
      <div className='experience-job-description'>{jd}</div>
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
