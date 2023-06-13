// ICONS
import LinkedIn from '../assets/img/linkedin-logo.png';
import GithubIcon from '../assets/img/github-sign.png';
import InstagramIcon from '../assets/img/instagram.png';

export default function SocialMedia() {
  const handleDownload = () => {
    const fileLink =
      'https://drive.google.com/u/0/uc?id=1tl6dA9vVnPFxmEwnvvnIsQ0ZZZxFkIR3&export=download';
    window.open(fileLink, '_blank');
  };

  return (
    <div>
      <div className='download-button-container'>
        <button
          className='download-button'
          type='button'
          onClick={handleDownload}
        >
          DOWNLOAD CV
        </button>
      </div>
      <div className='social-media'>
        <a
          href='https://www.linkedin.com/in/neil-james-tony-perdigon-631422207'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedIn} alt='linked-in' height={30} />
        </a>
        <a
          href='https://github.com/neiljamestony'
          target='_blank'
          rel='noreferrer'
        >
          <img src={GithubIcon} alt='github-icon' height={30} />
        </a>
        <a
          href='https://instagram.com/nljmstny?igshid=MzNlNGNkZWQ4Mg=='
          target='_blank'
          rel='noreferrer'
        >
          <img src={InstagramIcon} alt='instagram-icon' height={30} />
        </a>
      </div>
    </div>
  );
}
