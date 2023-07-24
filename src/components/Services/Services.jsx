import { Container } from "../Container";
import spinner from "../../assets/images/servicesSpinner.png";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { Typewriter } from "../Typewriter";

export const Services = () => {
  const options = {
    block: "start",
    behavior: "smooth",
  };
  const handleNavLinkClick = (e) => {
    document.querySelector(`.${e.target.dataset.selector}`).scrollIntoView(options);
  };
  const observer = useInView({ threshold: 0.05 });
  const numberObserver = useInView({ threshold: 0.1 });

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
            <div className="phrase">
              <Typewriter targetText="Technology" timeout={100} started={observer.inView} />
            </div>
            <div className="phrase">
              <Typewriter targetText="services" timeout={600} started={observer.inView} />
            </div>
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
        <div className="services__lower__text" ref={numberObserver.ref}>
          We help you&nbsp;
          <span style={{ color: "var(--blue)" }}>
            unlock
            <br /> your potential
          </span>
          &nbsp;
          <span style={{ color: "var(--olive)" }}>
            and
            <br /> win
          </span>
          , even if you seem
          <br /> invisible.
        </div>
        <div className="services__lower__row">
          <div className="services__lower__row__item">
            <div
              className={classNames("services__lower__row__item__number", { animate: numberObserver.inView })}
              style={{ color: "var(--blue)" }}
            >
              53
            </div>
            <div className="services__lower__row__item__text">Successfully closed projects over the past year</div>
          </div>
          <div className="services__lower__row__item">
            <div
              className={classNames("services__lower__row__item__number secondnumber", {
                animate: numberObserver.inView,
              })}
              style={{ color: "var(--olive)" }}
            >
              20
            </div>
            <div className="services__lower__row__item__text">Specialists in the team</div>
          </div>
          <div className="services__lower__row__item">
            <div
              className={classNames("services__lower__row__item__symbol__container", {
                animate: numberObserver.inView,
              })}
            >
              <svg
                className="services__lower__row__item__symbol"
                width="239"
                height="180"
                viewBox="0 0 239 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M146.484 67.332C154.281 67.332 160.531 69.4533 165.232 73.696C169.933 77.824 172.284 83.9013 172.284 91.928C172.284 99.9547 169.933 106.147 165.232 110.504C160.531 114.747 154.281 116.868 146.484 116.868C141.095 116.868 136.336 115.721 132.208 113.428C128.195 111.135 124.009 107.007 119.652 101.044C115.409 106.892 111.167 111.02 106.924 113.428C102.796 115.721 98.0947 116.868 92.82 116.868C85.0227 116.868 78.7733 114.747 74.072 110.504C69.3707 106.147 67.02 99.9547 67.02 91.928C67.02 83.9013 69.3707 77.824 74.072 73.696C78.7733 69.4533 85.0227 67.332 92.82 67.332C98.2093 67.332 102.968 68.4787 107.096 70.772C111.339 73.0653 115.524 77.136 119.652 82.984C123.895 77.136 128.08 73.0653 132.208 70.772C136.336 68.4787 141.095 67.332 146.484 67.332ZM93.68 106.892C97.464 106.892 100.961 105.803 104.172 103.624C107.383 101.331 110.823 97.432 114.492 91.928C107.841 82.0667 100.904 77.136 93.68 77.136C89.3227 77.136 85.768 78.3973 83.016 80.92C80.264 83.4427 78.888 87.112 78.888 91.928C78.888 96.6293 80.264 100.299 83.016 102.936C85.768 105.573 89.3227 106.892 93.68 106.892ZM145.624 106.892C149.981 106.892 153.536 105.573 156.288 102.936C159.155 100.299 160.588 96.6293 160.588 91.928C160.588 87.112 159.212 83.4427 156.46 80.92C153.708 78.3973 150.096 77.136 145.624 77.136C138.4 77.136 131.463 82.0667 124.812 91.928C128.481 97.432 131.921 101.331 135.132 103.624C138.343 105.803 141.84 106.892 145.624 106.892Z"
                  fill="white"
                />
                <g filter="url(#filter0_d_412_2)">
                  <path
                    d="M119.5 170.5C150.839 170.5 179.275 161.526 199.915 146.94C220.552 132.357 233.5 112.071 233.5 89.5C233.5 66.9293 220.552 46.6431 199.915 32.06C179.275 17.4742 150.839 8.5 119.5 8.5C88.1609 8.5 59.7251 17.4742 39.0848 32.06C18.4484 46.6431 5.5 66.9293 5.5 89.5C5.5 112.071 18.4484 132.357 39.0848 146.94C59.7251 161.526 88.1609 170.5 119.5 170.5Z"
                    stroke="url(#paint0_radial_412_2)"
                    strokeWidth="3"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_412_2"
                    x="0"
                    y="7"
                    width="239"
                    height="173"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_412_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_412_2" result="shape" />
                  </filter>
                  <radialGradient
                    id="paint0_radial_412_2"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(119.5 89.5) rotate(63.0042) scale(89.2216 126.257)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                    <animateTransform
                      attributeName="gradientTransform"
                      attributeType="XML"
                      type="rotate"
                      from="0"
                      to="360"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="services__lower__row__item__text">An endless generation of new ideas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
