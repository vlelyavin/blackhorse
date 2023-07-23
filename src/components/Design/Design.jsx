import { Container } from "../Container";
import designUpperImage from "../../assets/images/designUpperImage.png";
import { Button } from "../Button";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "../Typewriter";

export const Design = () => {
  const observer = useInView({ threshold: 0.1 });
  return (
    <section className="design" ref={observer.ref}>
      <Container>
        <div className="design__inner">
          <div className="design__upper">
            <div className={classNames("design__upper__image__container", { animate: observer.inView })}>
              <img src={designUpperImage} alt="designUpperImage" className="design__upper__image" />
            </div>
            <div className="design__upper__right">
              <div className={classNames("design__upper__right__title", { animate: observer.inView })}>Services</div>
              <div className={classNames("design__upper__right__list", { animate: observer.inView })}>
                <div className="design__upper__right__list__column">
                  <div className="design__upper__right__list__column__item">User interface design</div>
                  <div className="design__upper__right__list__column__item">User experience design</div>
                  <div className="design__upper__right__list__column__item">Responsive design</div>
                </div>
                <div className="design__upper__right__list__column">
                  <div className="design__upper__right__list__column__item">Wireframes</div>
                  <div className="design__upper__right__list__column__item">Visual design</div>
                  <div className="design__upper__right__list__column__item">Graphic design</div>
                </div>
              </div>
            </div>
          </div>
          <div className="design__lower">
            <div className={classNames("design__upper__image__container", { animate: observer.inView })}>
              <img src={designUpperImage} alt="designUpperImage" className="design__upper__image" />
            </div>
            <div className={classNames("design__lower__title title", { animate: observer.inView })}>
              <Typewriter targetText="Web and ux/Ui" timeout={100} started={observer.inView} />
              <br />
              <Typewriter targetText="design" timeout={800} started={observer.inView} />
            </div>
            <div className="design__lower__info">
              <div className="design__lower__blocks">
                <div className="design__lower__block">
                  As an end-to-end service provider, we offer professional website design services that ensure a truly
                  tailored approach to the look and feel of our customers’ web applications.
                </div>
                <div className="design__lower__block">
                  We make sure that every page we deliver is unique and fully complies with today’s standards of
                  usability, as well as with the customer’s corporate or brand visual guidelines. The amount of
                  information that modern applications have to contain is growing every day.
                </div>
                <div className="design__lower__block">
                  The issue is no longer how to demonstrate your professionalism in a graphically complex interface. On
                  the contrary, the goal today is to make a technically complex and functionally loaded project easy to
                  use. When you pull up a website, you should be able to easily find what you're looking for in three
                  clicks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
