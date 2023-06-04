import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  animatedClassName: 'aos-animate',
  initClassName: 'aos-init', // class applied after initialization
  useClassNames: true,
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
});

export default function About() {
  // const handleDownload = () => {
  //   const fileLink =
  //     'https://drive.google.com/u/0/uc?id=1tl6dA9vVnPFxmEwnvvnIsQ0ZZZxFkIR3&export=download';
  //   window.open(fileLink, '_blank');
  // };

  return <div className='about' />;
}
