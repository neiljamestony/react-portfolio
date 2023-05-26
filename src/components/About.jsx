import React from 'react';
import {
  AboutContainer,
  AboutSubContainer,
  AboutTitle,
  AboutContentContainer,
  ImageContainer,
  MeIcon,
  AboutMeContainer,
  AboutMeContent,
  DownloadCVButton,
} from '../assets/css/main';
export default function About() {
  const handleDownload = () => {
    const fileLink =
      'https://drive.google.com/u/0/uc?id=1tl6dA9vVnPFxmEwnvvnIsQ0ZZZxFkIR3&export=download';

    window.open(fileLink, '_blank');
  };

  return (
    <AboutContainer>
      <AboutSubContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutContentContainer>
          <AboutMeContainer>
            <div>
              <AboutMeContent>
                I am Neil James Tony Perdigon, Software Engineer from Metro
                Manila, Philippines 📍. I'm a self-taught web developer with 4
                years of experience in the field. I have a true passion for
                creating innovative and user-friendly websites. Currently, I'm
                expanding my skillset by diving into backend technologies,
                further enhancing my abilities to build robust and efficient web
                applications. With my combination of experience, dedication, and
                continuous learning, I strive to deliver high-quality solutions
                that meet the needs of both clients and users.
              </AboutMeContent>
            </div>
            <ImageContainer>
              <div
                style={{
                  display: 'block',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <MeIcon />
                <div style={{ marginTop: 23 }}>
                  <DownloadCVButton
                    style={{ width: '100%' }}
                    onClick={handleDownload}
                  >
                    Download CV
                  </DownloadCVButton>
                </div>
              </div>
            </ImageContainer>
          </AboutMeContainer>
        </AboutContentContainer>
      </AboutSubContainer>
    </AboutContainer>
  );
}
