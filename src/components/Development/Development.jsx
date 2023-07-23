import { Container } from "../Container";
import devUpperImage from "../../assets/images/developmentUpperImage.png";
import { Button } from "../Button";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "../Typewriter";

export const Development = () => {
  const observer = useInView({ threshold: 0.1 });
  return (
    <section className="dev" ref={observer.ref}>
      <Container>
        <div className="dev__inner">
          <div className="dev__upper">
            <div className={classNames("dev__upper__title title", { animate: observer.inView })}>
              <Typewriter targetText="Web and" timeout={100} started={observer.inView} />

              <br />
              <Typewriter targetText="mobile" timeout={450} started={observer.inView} />
              <br />
              <Typewriter targetText="development" timeout={750} started={observer.inView} />
            </div>
            <div className={classNames("dev__upper__image__container", { animate: observer.inView })}>
              <img src={devUpperImage} alt="devUpperImage" className="dev__upper__image" />
            </div>
          </div>
          <div className="dev__row">
            <div className={classNames("dev__column", { animate: observer.inView })}>
              <div className="dev__column__title">
                Web
                <br /> development
              </div>
              <div className="dev__column__text">
                As our primary area of expertise, web development plays a pivotal role in our service portfolio.
                <br />
                <br />
                Our developers are capable of delivering web-based solutions of any size and complexity that can scale
                and diversify with your business without compromising on performance or quality.
                <br />
                <br />
                Our code conforms to international PSR 2 standards and the Google Javascript Style Guide.To achieve
                this, we use the most popular and easy-to-maintain frameworks and platforms:
              </div>
              <div className="dev__column__services">
                <div className="dev__column__services__title">Services</div>
                <ul className="dev__column__services__list">
                  <div className="dev__column__services__list__column">
                    <li className="dev__column__services__list__column__item">Back-End development</li>
                    <li className="dev__column__services__list__column__item">Front-end development</li>
                    <li className="dev__column__services__list__column__item">Ecommerce integration</li>
                  </div>
                  <div className="dev__column__services__list__column">
                    <li className="dev__column__services__list__column__item">Shopping cart integration</li>
                    <li className="dev__column__services__list__column__item">3rd-Party extensions/API’s</li>
                    <li className="dev__column__services__list__column__item">Performance optimization</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className={classNames("dev__column", { animate: observer.inView })}>
              <div className="dev__column__title">
                Mobile
                <br /> development
              </div>
              <div className="dev__column__text">
                Develop native & cross-platform mobile apps for multiple mobile OS - android, iphone, windows,
                blackberry.
                <br /> <br />
                Hire a top mobile application development company to build an app, which creates brand.We company which
                builds intuitive user interfaces and custom functionalities including NFC to develop best in class
                android apps and games for smartphones and tablets.
              </div>
              <div className="dev__column__services">
                <div className="dev__column__services__title">Services</div>
                <ul className="dev__column__services__list">
                  <div className="dev__column__services__list__column">
                    <li className="dev__column__services__list__column__item">Android App Development</li>
                    <li className="dev__column__services__list__column__item">Mobile Game Development</li>
                  </div>
                  <div className="dev__column__services__list__column">
                    <li className="dev__column__services__list__column__item">iPhone App Development</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
