import React from 'react';
import {
  ServiceContainer,
  AboutTitle,
  ExperienceSubContainer,
  ExperienceContent,
  ContentContainers,
  BulletsContainer,
  Bullets,
  BulletsLineContainer,
  BulletsLine,
  ExperienceContentContainer,
} from '../assets/css/main';
import ExperienceItem from './ExperienceItem';
import { education, experience } from '../app/data/data';

export default function Experience() {
  return (
    <ServiceContainer>
      <ExperienceSubContainer>
        <AboutTitle>Experience</AboutTitle>
        <ExperienceContent>
          <ContentContainers>
            <BulletsContainer>
              <div>
                <Bullets />
                <BulletsLineContainer>
                  <BulletsLine />
                </BulletsLineContainer>
                <Bullets />
                <BulletsLineContainer>
                  <BulletsLine />
                </BulletsLineContainer>
                <Bullets />
                <BulletsLineContainer>
                  <BulletsLine />
                </BulletsLineContainer>
              </div>
            </BulletsContainer>
            <ExperienceContentContainer>
              {education.map((data, key) => {
                return <ExperienceItem key={key} {...data} />;
              })}
            </ExperienceContentContainer>
          </ContentContainers>
          <ContentContainers>
            <BulletsContainer>
              <div>
                <Bullets />
                <BulletsLineContainer>
                  <BulletsLine />
                </BulletsLineContainer>
                <Bullets />
                <BulletsLineContainer>
                  <BulletsLine />
                </BulletsLineContainer>
                <Bullets />
                <BulletsLineContainer>
                  <BulletsLine />
                </BulletsLineContainer>
              </div>
            </BulletsContainer>
            <ExperienceContentContainer>
              {experience.map((data, key) => {
                return <ExperienceItem key={key} {...data} />;
              })}
            </ExperienceContentContainer>
          </ContentContainers>
        </ExperienceContent>
      </ExperienceSubContainer>
    </ServiceContainer>
  );
}
