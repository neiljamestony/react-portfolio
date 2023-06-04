/* eslint-disable react/prop-types */
import { ViewButton } from '../assets/css/main';
export default function ProjectItem({ title, technologies, icon }) {
  return (
    <div
      style={{
        backgroundColor: '#272042',
        height: 300,
        width: 600,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          padding: 10,
          gap: 10,
        }}
      >
        <div
          style={{
            height: 'inherit',
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={icon} alt={`${title}'s icon`} height={70} />
        </div>
        <div style={{ height: 240, backgroundColor: 'yellow', width: '80%' }}>
          2
        </div>
      </div>
      {/* <div style={{ display: 'block', textAlign: 'center', marginTop: 10 }}>
        <div style={{ color: '#fff', fontSize: 18, fontFamily: 'Poppins' }}>
          {title}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            marginTop: 30,
            flexWrap: 'wrap',
          }}
        >
          {technologies.map((tech, key) => {
            return (
              <div
                key={key}
                style={{
                  backgroundColor: '#FF4C60',
                  color: '#fff',
                  fontSize: 14,
                  padding: 5,
                  borderRadius: 40,
                  width: 100,
                }}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
