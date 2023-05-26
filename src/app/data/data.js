import FrontendIcon from '../../assets/img/whiteIcons/front-end.png';
import BackendIcon from '../../assets/img/whiteIcons/web.png';
import DBMIcon from '../../assets/img/whiteIcons/database.png';
import ReactIcon from '../../assets/img//whiteIcons/atom.png';
import NodeJsIcon from '../../assets/img/nodejs.svg';
import TypescriptIcon from '../../assets/img/whiteIcons/typescript.png';
import MongodbIcon from '../../assets/img/mongodb.svg';

export const servicesArr = [
  {
    icon: FrontendIcon,
    title: 'Front-End Development',
    backgroundColor: '#6C6CE5',
    skillsIcon: [ReactIcon, TypescriptIcon],
  },
  {
    icon: DBMIcon,
    title: 'Database Management',
    backgroundColor: '#FF4C60',
    skillsIcon: [MongodbIcon],
  },
  {
    icon: BackendIcon,
    title: 'Back-End Development',
    backgroundColor: '#FFD15C',
    skillsIcon: [NodeJsIcon],
  },
];

export const education = [
  {
    year: '2015-2019',
    bldgName: 'St. Clare College of Caloocan 📍',
    profession: 'Bachelor of Science in Computer Science',
    address: 'Zabarte Rd. Camarin, Caloocan City',
    level: 'Tertiary',
  },
  {
    year: '2011-2015',
    bldgName: 'Camarin High School 📍',
    profession: '',
    address: 'Cadena de Amor St., Caloocan City',
    level: 'Secondary',
  },
  {
    year: '2005-2011',
    bldgName: 'Camarin Elementary School (Main) 📍',
    profession: '',
    address: 'Zabarte Rd. Camarin, Caloocan City',
    level: 'Primary',
  },
];

export const experience = [
  {
    year: '2022-PRESENT',
    bldgName: 'Accenture Philippines 📍',
    profession: 'Software Engineer',
    address: 'Uptown 2, BGC, Taguig City',
    level: 'Tertiary',
  },
  {
    year: '2021-2022',
    bldgName: 'i4One Inc. 📍',
    profession: 'Front-end Developer',
    address: 'Cadena de Amor St., Caloocan City',
    level: 'Secondary',
  },
  {
    year: '2019-2021',
    bldgName: 'Aktus Global Management Inc. 📍',
    profession: 'Web Developer',
    address: 'Ortigas, Pasig City',
    level: 'Primary',
  },
];
