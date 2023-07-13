import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import classNames from "classnames";

export const Banner = () => {
  const observer = useInView({ threshold: 0.5 });
  return (
    <Container>
      <section className="banner" ref={observer.ref}>
        <h1 className={classNames("banner__title", { animate: observer.inView })}>
          <div className="banner__poster">For you</div>
          We
          <br /> Build Web
          <br /> Business
        </h1>
        <div className="banner__right">
          <p className={classNames("banner__right__text", { animate: observer.inView })}>
            <b>Dark Horse</b>
            <br /> provides full cycle of
            <br /> web development
            <br /> from initial concept to
            <br /> a live application
          </p>
          <div
            className={classNames("banner__right__button", { animate: observer.inView })}
            onClick={() => document.querySelector(".contact").scrollIntoView({ block: "start", behavior: "smooth" })}
          >
            Let’s
            <br /> Talk
          </div>
        </div>
      </section>
    </Container>
  );
};
