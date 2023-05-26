import React from 'react';
import LinkedIn from '../assets/img/linkedin-logo.png';
import Github from '../assets/img/github.png';
import NodeJS from '../assets/img/nodejs.svg';
import ReactIcon from '../assets/img/react.png';
import Mongodb from '../assets/img/mongodb.svg';
import TypescriptIcon from '../assets/img/typescript.png';
import {
  HomeInfoContainer,
  JobTitle,
  HomeInfoIntro,
  SocialMediaContainer,
  TechStacksContainer,
  TechStacksTitle,
  TechStacksIconContainer,
  TechStacksIconHolder,
} from '../assets/css/main';

export default function HomeInfo() {
  return (
    <HomeInfoContainer>
      <div>
        <JobTitle>Front-end Web Developer 👋🏽</JobTitle>
        <HomeInfoIntro>
          Hi, I'm Neil James Tony Perdigon. A passionate Front-end Web Developer
          based in Metro Manila, Philippines 📍
        </HomeInfoIntro>
        <SocialMediaContainer>
          <a href='https://www.linkedin.com/in/neil-james-tony-perdigon-631422207/'>
            <img src={LinkedIn} alt='linked-in' height={40} />
          </a>
          <a href='https://github.com/neiljamestony'>
            <img src={Github} alt='github' height={40} />
          </a>
        </SocialMediaContainer>
        <TechStacksContainer>
          <TechStacksTitle>Tech Stacks :</TechStacksTitle>
          <TechStacksIconContainer>
            <TechStacksIconHolder>
              <img src={ReactIcon} alt='react icon' height={35} />
            </TechStacksIconHolder>
            <TechStacksIconHolder>
              <img src={NodeJS} alt='react icon' height={35} />
            </TechStacksIconHolder>
            <TechStacksIconHolder>
              <img src={Mongodb} alt='react icon' height={35} />
            </TechStacksIconHolder>
            <TechStacksIconHolder>
              <img src={TypescriptIcon} alt='react icon' height={35} />
            </TechStacksIconHolder>
          </TechStacksIconContainer>
        </TechStacksContainer>
      </div>
    </HomeInfoContainer>
  );
}
