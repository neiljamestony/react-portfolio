import React from 'react';
import {
  MyIconHolder,
  ServiceItemContainer,
  ServiceItemSubContainer,
  ServiceItemTitle,
} from '../assets/css/main';

export default function Service({ icon, title, backgroundColor, skillsIcon }) {
  return (
    <ServiceItemContainer
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <ServiceItemSubContainer>
        <MyIconHolder src={icon} alt={`${icon}-icon`} height={100} />
        <ServiceItemTitle>{title}</ServiceItemTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            width: '100%',
            gap: 10,
          }}
        >
          {skillsIcon.map((skill, key) => {
            return (
              <span data-tooltip='Tooltip help here!' data-flow='right'>
                <MyIconHolder src={skill} alt='icon' height={30} />
              </span>
            );
          })}
        </div>
      </ServiceItemSubContainer>
    </ServiceItemContainer>
  );
}
