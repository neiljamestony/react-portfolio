import React from 'react';
import { ExperienceItemContainer } from '../assets/css/main';
export default function ExperienceItem({ year, bldgName, profession, level }) {
  return (
    <ExperienceItemContainer>
      <div
        style={{
          marginTop: level === 'Tertiary' ? 10 : level === 'Primary' && -10,
          color: '#8B88B1',
          fontSize: 14,
          fontFamily: 'Poppins',
        }}
      >
        {year}
      </div>
      <div style={{ fontSize: 20, color: '#fff', fontWeight: 'bolder' }}>
        {profession}
      </div>
      <div style={{ fontSize: 20, color: '#fff', fontWeight: 'bolder' }}>
        {profession === '' && level}
      </div>
      <div
        style={{
          marginTop: 15,
          fontSize: 16,
          color: '#fff',
        }}
      >
        {bldgName}
      </div>
    </ExperienceItemContainer>
  );
}
