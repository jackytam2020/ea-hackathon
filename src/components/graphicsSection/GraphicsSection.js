import './GraphicsSection.scss';
import { useInView } from 'react-intersection-observer';
import gamer from '../../assets/images/gamer.png';
import eaApp from '../../assets/images/hero-banner.png';

import LargeImageCard from '../LargeImageCard/LargeImageCard';

export default function GraphicsSection() {
  const options1 = {
    threshold: 0,
    rootMargin: '0px 0px -250px 0px',
    trackVisibility: true,
    delay: 500,
  };
  const options2 = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  };
  const options3 = {
    rootMargin: '0px 0px -250px 0px',
    threshold: 0,
    trackVisibility: true,
    delay: 500,
  };
  const options4 = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  };
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView(options1);
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView(options2);
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView(options3);
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView(options4);

  return (
    <section className="graphics">
      <LargeImageCard
        src={gamer}
        reference={myRef1}
        reference2={myRef2}
        myElementIsVisible1={myElementIsVisible1}
        myElementIsVisible2={myElementIsVisible2}
        subheader={'Built to Connect'}
        textBody={
          'Link your EA Account with your favorite gaming platforms to import friend lists and play together.'
        }
        alt={'image1'}
      />
      <LargeImageCard
        src={eaApp}
        reference={myRef3}
        reference2={myRef4}
        myElementIsVisible1={myElementIsVisible3}
        myElementIsVisible2={myElementIsVisible4}
        subheader={'Optimized Gaming Experience'}
        textBody={`Experience an user interface that's design for speed and optimized gaming experience so that you can get into your games faster than ever before.`}
        alt={'image2'}
      />
    </section>
  );
}
