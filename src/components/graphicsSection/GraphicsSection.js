import "./GraphicsSection.scss";
import { useInView } from "react-intersection-observer";
import gamer from "../../assets/images/gamer.png";
import eaApp from "../../assets/images/hero-banner.png";

export default function GraphicsSection() {
  const options1 = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
    trackVisibility: true,
    delay: 500,
  };
  const options2 = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  };
  const options3 = {
    rootMargin: "0px 0px -250px 0px",
    threshold: 0,
    trackVisibility: true,
    delay: 500,
  };
  const options4 = {
    rootMargin: "0px 0px 0px 0px",
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
      <div className="graphics__container">
        <div className="graphics__image-text-wrapper">
          <div
            ref={myRef1}
            className={`graphics__image-container ${
              myElementIsVisible1 ? "graphics__image-container--up" : "graphics__image-container--down"
            }`}
          >
            <img className="graphics__image" src={gamer} alt="boy playing video game on his computer" />
          </div>

          <div className="graphics__text-container">
            <h2
              ref={myRef2}
              className={`graphics__subheader ${
                myElementIsVisible2 ? "graphics__subheader--up" : "graphics__subheader--down"
              }`}
            >
              Built to Connect
            </h2>
            <p
              ref={myRef2}
              className={`graphics__text ${myElementIsVisible2 ? "graphics__text--up" : "graphics__text--down"}`}
            >
              Link your EA Account with your favorite gaming platforms to import friend lists and play together.
            </p>
          </div>
        </div>

        <div className="graphics__image-text-wrapper">
          <div
            ref={myRef3}
            className={`graphics__image-container ${
              myElementIsVisible3 ? "graphics__image-container--up" : "graphics__image-container--down"
            }`}
          >
            <img className="graphics__image" src={eaApp} alt="soccer player in video game" />
          </div>
          <div className="graphics__text-container">
            <h2
              ref={myRef4}
              className={`graphics__subheader ${
                myElementIsVisible4 ? "graphics__subheader--up" : "graphics__subheader--down"
              }`}
            >
              Optimized Gaming Experience
            </h2>
            <p
              ref={myRef4}
              className={`graphics__text ${myElementIsVisible4 ? "graphics__text--up" : "graphics__text--down"}`}
            >
              Experience an user inferface that's design for speed and optimized gaming experience so that you can get
              into your games faster than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
