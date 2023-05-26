// import React from 'react';
import avatarIcon from '../assets/img/avatar.png';
import linkedIn from '../assets/img/linkedIn.png';
import github from '../assets/img/github.png';
import TypedIt from 'typeit-react';
import {
  MyName,
  MyIconHolder,
  SocialIconHolder,
  SocialIconContainer,
  HomeMainContainer,
  HomeSubContainer,
  TypedContainer,
} from '../assets/css/main';

export default function Home() {
  return (
    <HomeMainContainer>
      <HomeSubContainer>
        <MyIconHolder src={avatarIcon} alt='myIcon' height={150} />
        <MyName>Neil James</MyName>
        <TypedContainer>
          <TypedIt
            options={{
              loop: true,
              pause: 300,
              speed: 60,
              strings: [
                `I'm a Software Engineer 👋`,
                `Learning Back-End Technologies 👋`,
                `Coffee lover ☕`,
                `Sleepy head 😪`,
              ],
            }}
          />
        </TypedContainer>
        <SocialIconContainer>
          <a href='https://www.linkedin.com/in/neil-james-tony-perdigon-631422207/'>
            <SocialIconHolder src={linkedIn} alt='linkedIn' height={30} />
          </a>
          <a href='https://github.com/neiljamestony'>
            <SocialIconHolder src={github} alt='github' height={30} />
          </a>
        </SocialIconContainer>
      </HomeSubContainer>
    </HomeMainContainer>
  );
}
