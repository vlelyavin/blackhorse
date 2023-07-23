import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import classNames from "classnames";
import { Typewriter } from "../Typewriter";

export const Banner = () => {
  const observer = useInView({ threshold: 0.1 });
  return (
    <Container>
      <section className="banner" ref={observer.ref}>
        <div className="banner__bg" alt="banner__bg"></div>
        <h1 className="banner__title">
          <div className={classNames("banner__poster", { animateposter: observer.inView })}>For you</div>
          <p className={classNames("word", { animate: observer.inView })}>
            <Typewriter targetText="We" timeout={100} started={observer.inView} />
          </p>
          <p className={classNames("word", { animate: observer.inView })}>
            <Typewriter targetText="Build Web" timeout={300} started={observer.inView} />
          </p>
          <p className={classNames("word", { animate: observer.inView })}>
            <Typewriter targetText="Business" timeout={800} started={observer.inView} />
          </p>
        </h1>
        <div className="banner__right">
          <p className="banner__right__text">
            <b>Dark Horse</b>
            <br /> provides full cycle of
            <br /> web development
            <br /> from initial concept to
            <br /> a live application
          </p>
          <div
            className={classNames("banner__right__button__container", { animate: observer.inView })}
            onClick={() => document.querySelector(".contact").scrollIntoView({ block: "start", behavior: "smooth" })}
          >
            <svg
              className="banner__right__button"
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.4545 19.4091C58.5173 19.4091 61 21.8919 61 24.9545V36.0455C61 39.1082 58.5173 41.5909 55.4545 41.5909H52.5102C51.1457 52.5329 41.8116 61 30.5 61V55.4545C39.688 55.4545 47.1364 48.0062 47.1364 38.8182V22.1818C47.1364 12.9938 39.688 5.54545 30.5 5.54545C21.312 5.54545 13.8636 12.9938 13.8636 22.1818V41.5909H5.54545C2.48278 41.5909 0 39.1082 0 36.0455V24.9545C0 21.8919 2.48278 19.4091 5.54545 19.4091H8.48979C9.85425 8.46705 19.1883 0 30.5 0C41.8116 0 51.1457 8.46705 52.5102 19.4091H55.4545ZM18.7421 40.9945L21.6816 36.2914C24.2381 37.8926 27.2609 38.8182 30.5 38.8182C33.7391 38.8182 36.7619 37.8926 39.3184 36.2914L42.258 40.9945C38.8492 43.1295 34.8188 44.3636 30.5 44.3636C26.1812 44.3636 22.1508 43.1295 18.7421 40.9945Z"
                fill="#4946C3"
              />
            </svg>
          </div>
        </div>
      </section>
    </Container>
  );
};
