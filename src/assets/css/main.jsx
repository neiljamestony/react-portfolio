import styled from 'styled-components';
import AvatarIcon from '../img/me2.png';
export const HomeMainContainer = styled.div({
  backgroundColor: '#2e264f',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const HomeSubContainer = styled.div({
  width: '50%',
  textAlign: 'center',
});

export const MyIconHolder = styled.img({
  marginBottom: 20,
});

export const SocialIconHolder = styled.img({
  color: '#fff',
  height: 30,
  '&:hover': {
    transform: 'rotate(6deg)',
  },
});

export const SocialIconContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  marginTop: 10,
});

export const DownloadCVButton = styled.button({
  backgroundColor: '#FF4C60',
  fontFamily: 'Poppins',
  color: '#fff',
  fontSize: 15,
  fontWeight: 'bolder',
  padding: 15,
  border: 'none',
  borderRadius: 20,
  width: '20%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'transparent',
    border: '1px solid #FF4C60',
    color: '#FF4C60',
  },
});

export const TypedContainer = styled.div({
  color: '#fff',
  fontSize: 20,
  marginBottom: 20,
});

export const DownloadButtonContainer = styled.div({
  marginTop: 50,
});

export const MyName = styled.div({
  fontSize: 35,
  fontWeight: 'bolder',
  color: '#fff',
  marginBottom: 20,
  fontFamily: 'Poppins',
});

export const HomeInfoContainer = styled.div({
  width: '50%',
  minHeight: 500,
  display: 'flex',
  placeItems: 'center',
  padding: 10,
});

export const JobTitle = styled.div({
  fontSize: 55,
  fontWeight: 'bolder',
});

export const HomeInfoIntro = styled.div({
  fontFamily: 'Poppins',
  color: 'gray',
});

export const SocialMediaContainer = styled.div({
  marginTop: 50,
  display: 'flex',
  justifyContent: 'space-between',
  width: '17%',
  gap: 10,
});

export const TechStacksContainer = styled.div({
  width: '60%',
  marginTop: 10,
  padding: 10,
});

export const TechStacksTitle = styled.div({
  fontFamily: 'Poppins',
  fontSize: 15,
  fontWeight: 'bold',
});

export const TechStacksIconContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  gap: 20,
});

export const TechStacksIconHolder = styled.div({
  height: 35,
  padding: 10,
  borderRadius: 40,
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
});

export const AboutContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#2e264f',
});

export const AboutSubContainer = styled.div({
  height: '60%',
  display: 'block',
  padding: 10,
  margin: '0 18% 0 18%',
});

export const AboutTitle = styled.div({
  fontSize: 40,
  fontWeight: 'bolder',
  color: '#fff',
  fontFamily: 'Poppins',
  // marginBottom: 50,
});

export const AboutContentContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '89%',
});

export const ImageContainer = styled.div({
  width: '90%',
  height: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MeIcon = styled.div({
  width: '200px',
  minWidth: '200px',
  height: '200px',
  backgroundImage: `url(${AvatarIcon})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '50%',
});

export const AboutMeContainer = styled.div({
  minWidth: 500,
  minHeight: '60%',
  backgroundColor: '#272042',
  borderRadius: 30,
  padding: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});

export const AboutMeContent = styled.div({
  color: '#fff',
  fontFamily: 'Poppins',
  width: '90%',
  height: '100%',
  fontSize: 18,
  lineHeight: 1.7,
});

export const ServiceContainer = styled.div({
  height: '100vh',
  backgroundColor: '#2e264f',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ServiceSubContainer = styled.div({
  display: 'block',
  height: '50%',
  width: '70%',
  margin: '0 18% 0 18%',
  padding: 10,
});

export const ServiceTitle = styled.div({
  fontSize: 30,
  color: '#fff',
  fontWeight: 'bolder',
  fontFamily: 'Poppins',
  marginBottom: 20,
});

export const ServiceContent = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: 10,
  marginTop: 10,
});

export const ServiceItemContainer = styled.div({
  width: '100%',
  height: 350,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 30,
});

export const ServiceItemSubContainer = styled.div({
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const ServiceItemTitle = styled.div({
  fontSize: 20,
  color: '#fff',
  fontWeight: 'bolder',
});

export const ExperienceSubContainer = styled.div({
  display: 'block',
  height: '70%',
  width: '70%',
  margin: '0 18% 0 18%',
  padding: 10,
});

export const ExperienceContent = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 50,
  marginTop: 10,
});

export const ContentContainers = styled.div({
  width: '100%',
  height: 500,
  borderRadius: 30,
  backgroundColor: '#272042',
  display: 'flex',
  justifyContent: 'center',
  padding: 10,
});

export const BulletsContainer = styled.div({
  width: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Bullets = styled.div({
  height: 25,
  width: 25,
  backgroundColor: 'transparent',
  border: '1px solid #FF4C60',
  borderRadius: '100%',
});

export const BulletsLineContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const BulletsLine = styled.div({
  border: '1px solid #FF4C60',
  height: 110,
  width: '1px',
});

export const ExperienceContentContainer = styled.div({
  flexGrow: 1,
  padding: 10,
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ExperienceItemContainer = styled.div({
  marginTop: 15,
  height: 115,
  padding: 10,
});
