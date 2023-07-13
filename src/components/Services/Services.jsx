import { Container } from "../Container";
import spinner from "../../assets/images/servicesSpinner.png";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const Services = () => {
  const options = {
    block: "start",
    behavior: "smooth",
  };
  const handleNavLinkClick = (e) => {
    document.querySelector(`.${e.target.dataset.selector}`).scrollIntoView(options);
  };
  const observer = useInView({ threshold: 0.05 });
  return (
    <section className="services" ref={observer.ref}>
      <Container>
        <div className="services__upper">
          <div className={classNames("services__upper__quote", { animate: observer.inView })}>
            <img src={spinner} alt="spinner" className="services__upper__quote__spinner" />
            <div className={classNames("services__upper__quote__text", { animate: observer.inView })}>
              Use our service to build your business online.
            </div>
          </div>
          <div className={classNames("services__upper__title title", { animate: observer.inView })}>
            Technology
            <br />
            services
          </div>
        </div>
        <div className="services__list">
          <div
            className={classNames("services__list__item", { animate: observer.inView })}
            data-selector="dev"
            onClick={handleNavLinkClick}
          >
            <div className="services__list__item__title">
              Web and
              <br /> mobile
              <br /> development
            </div>
            <div className="services__list__item__icon__container">
              <svg
                className="services__list__item__icon"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.0083 21.182L16.6435 40.5468L13.4615 37.3648L32.8264 18H15.7584V13.5H40.5083V38.25H36.0083V21.182Z"
                  fill="var(--white)"
                />
              </svg>
            </div>
          </div>
          <div
            className={classNames("services__list__item", { animate: observer.inView })}
            data-selector="design"
            onClick={handleNavLinkClick}
          >
            <div className="services__list__item__title">
              Web and
              <br /> UX/UI
              <br /> design
            </div>
            <div className="services__list__item__icon__container">
              <svg
                className="services__list__item__icon"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.0083 21.182L16.6435 40.5468L13.4615 37.3648L32.8264 18H15.7584V13.5H40.5083V38.25H36.0083V21.182Z"
                  fill="var(--blue)"
                />
              </svg>
            </div>
          </div>
          <div
            className={classNames("services__list__item", { animate: observer.inView })}
            data-selector="marketing"
            onClick={handleNavLinkClick}
          >
            <div className="services__list__item__title">
              Marketing
              <br /> and Seo
            </div>
            <div className="services__list__item__icon__container">
              <svg
                className="services__list__item__icon"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.0083 21.182L16.6435 40.5468L13.4615 37.3648L32.8264 18H15.7584V13.5H40.5083V38.25H36.0083V21.182Z"
                  fill="var(--olive)"
                />
              </svg>
            </div>
          </div>
          <div
            className={classNames("services__list__item", { animate: observer.inView })}
            data-selector="support"
            onClick={handleNavLinkClick}
          >
            <div className="services__list__item__title">
              Support &
              <br /> Maintenance
            </div>
            <div className="services__list__item__icon__container">
              <svg
                className="services__list__item__icon"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.0083 21.182L16.6435 40.5468L13.4615 37.3648L32.8264 18H15.7584V13.5H40.5083V38.25H36.0083V21.182Z"
                  fill="#2c2c2c"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
      <div className="services__lower">
        <div className="services__lower__title title">Black horse</div>
        <div className="services__lower__text">
          We help you{" "}
          <span style={{ color: "var(--blue)" }}>
            unlock
            <br /> your potential
          </span>{" "}
          <span style={{ color: "var(--olive)" }}>
            and
            <br /> win
          </span>
          , even if you seem
          <br /> invisible.
        </div>
        <div className="services__lower__row">
          <div className="services__lower__row__item">
            <div className="services__lower__row__item__number" style={{ color: "var(--blue)" }}>
              53
            </div>
            <div className="services__lower__row__item__text">Successfully closed projects over the past year</div>
          </div>
          <div className="services__lower__row__item">
            <div className="services__lower__row__item__number" style={{ color: "var(--olive)" }}>
              20
            </div>
            <div className="services__lower__row__item__text">Specialists in the team</div>
          </div>
          <div className="services__lower__row__item">
            <div className="services__lower__row__item__symbol__container">
              <svg
                className="services__lower__row__item__symbol"
                width="106"
                height="50"
                viewBox="0 0 106 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.484 0.331998C87.2813 0.331998 93.5307 2.45333 98.232 6.696C102.933 10.824 105.284 16.9013 105.284 24.928C105.284 32.9547 102.933 39.1467 98.232 43.504C93.5307 47.7467 87.2813 49.868 79.484 49.868C74.0947 49.868 69.336 48.7213 65.208 46.428C61.1947 44.1347 57.0093 40.0067 52.652 34.044C48.4093 39.892 44.1667 44.02 39.924 46.428C35.796 48.7213 31.0947 49.868 25.82 49.868C18.0227 49.868 11.7733 47.7467 7.072 43.504C2.37067 39.1467 0.02 32.9547 0.02 24.928C0.02 16.9013 2.37067 10.824 7.072 6.696C11.7733 2.45333 18.0227 0.331998 25.82 0.331998C31.2093 0.331998 35.968 1.47866 40.096 3.77199C44.3387 6.06533 48.524 10.136 52.652 15.984C56.8947 10.136 61.08 6.06533 65.208 3.77199C69.336 1.47866 74.0947 0.331998 79.484 0.331998ZM26.68 39.892C30.464 39.892 33.9613 38.8027 37.172 36.624C40.3827 34.3307 43.8227 30.432 47.492 24.928C40.8413 15.0667 33.904 10.136 26.68 10.136C22.3227 10.136 18.768 11.3973 16.016 13.92C13.264 16.4427 11.888 20.112 11.888 24.928C11.888 29.6293 13.264 33.2987 16.016 35.936C18.768 38.5733 22.3227 39.892 26.68 39.892ZM78.624 39.892C82.9813 39.892 86.536 38.5733 89.288 35.936C92.1547 33.2987 93.588 29.6293 93.588 24.928C93.588 20.112 92.212 16.4427 89.46 13.92C86.708 11.3973 83.096 10.136 78.624 10.136C71.4 10.136 64.4627 15.0667 57.812 24.928C61.4813 30.432 64.9213 34.3307 68.132 36.624C71.3427 38.8027 74.84 39.892 78.624 39.892Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="services__lower__row__item__text">An endless generation of new ideas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
