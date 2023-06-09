import Service from './Service';
import { servicesArr } from '../app/data/data';
import {
  ServiceContainer,
  ServiceSubContainer,
  AboutTitle,
  ServiceContent,
} from '../assets/css/main';

export default function Services() {
  return (
    <ServiceContainer>
      <ServiceSubContainer>
        <AboutTitle data-aos='fade-up'>Skills</AboutTitle>
        <ServiceContent>
          {servicesArr.map((srv, key) => {
            return <Service key={key} {...srv} />;
          })}
        </ServiceContent>
      </ServiceSubContainer>
    </ServiceContainer>
  );
}
