import { Container } from "../Container";
import logo from "../../assets/images/logo.svg";

export const Footer = () => {
  const options = {
    block: "start",
    behavior: "smooth",
  };
  const handleNavLinkClick = (e) => {
    document.querySelector(`.${e.target.dataset.selector}`).scrollIntoView(options);
  };
  return (
    <Container>
      <footer className="footer">
        <div className="footer__contact">
          <div className="footer__contact__column">
            <div className="footer__contact__column__title">
              Address
              <br /> Information
            </div>
            <div className="footer__contact__column__line">
              <svg
                className="footer__contact__column__line__icon"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29635 14.4043C2.74673 13.9617 0 10.9337 0 7.26419C0 3.29004 3.22168 0.0683594 7.19583 0.0683594C11.17 0.0683594 14.3917 3.29004 14.3917 7.26419C14.3917 10.9337 11.6449 13.9617 8.09531 14.4043V17.1585H6.29635V14.4043ZM0.899479 18.0579H13.4922V19.8569H0.899479V18.0579Z"
                  fill="#171717"
                />
              </svg>
              <div className="footer__contact__column__line__text">
                3rd Floor Suite , 207 Regent
                <br /> Street, London,
                <br /> W1B3HH
              </div>
            </div>
          </div>
          <div className="footer__contact__column">
            <div className="footer__contact__column__title">
              Contact
              <br /> Information
            </div>
            <div className="footer__contact__column__line">
              <svg
                className="footer__contact__column__line__icon"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9896 7.09518C18.9831 7.09518 19.7885 7.9006 19.7885 8.89414V12.4921C19.7885 13.4856 18.9831 14.291 17.9896 14.291H17.0344C16.5918 17.8406 13.5638 20.5874 9.89427 20.5874V18.7884C12.8749 18.7884 15.2911 16.3721 15.2911 13.3915V7.99466C15.2911 5.01405 12.8749 2.59779 9.89427 2.59779C6.91366 2.59779 4.4974 5.01405 4.4974 7.99466V14.291H1.79896C0.805421 14.291 0 13.4856 0 12.4921V8.89414C0 7.9006 0.805421 7.09518 1.79896 7.09518H2.75411C3.19674 3.54556 6.22474 0.798828 9.89427 0.798828C13.5638 0.798828 16.5918 3.54556 17.0344 7.09518H17.9896ZM6.07998 14.0975L7.03355 12.5718C7.8629 13.0913 8.8435 13.3915 9.89427 13.3915C10.945 13.3915 11.9257 13.0913 12.755 12.5718L13.7086 14.0975C12.6028 14.7901 11.2953 15.1905 9.89427 15.1905C8.49324 15.1905 7.18578 14.7901 6.07998 14.0975Z"
                  fill="#171717"
                />
              </svg>

              <a href="tel:+447537142868" className="footer__contact__column__line__text">
                +44 753 714 28 68
              </a>
            </div>
            <div className="footer__contact__column__line">
              <svg
                className="footer__contact__column__line__icon"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.79889 0.666992H17.9895C18.4863 0.666992 18.889 1.06971 18.889 1.56647V15.9581C18.889 16.4549 18.4863 16.8576 17.9895 16.8576H1.79889C1.30213 16.8576 0.899414 16.4549 0.899414 15.9581V1.56647C0.899414 1.06971 1.30213 0.666992 1.79889 0.666992ZM9.94871 8.47708L4.18001 3.57924L3.01569 4.95058L9.95996 10.8465L16.7792 4.94506L15.6019 3.58476L9.94871 8.47708Z"
                  fill="#171717"
                />
              </svg>

              <a href="mailto:office@quantumtech.dev" className="footer__contact__column__line__text">
                office@quantumtech.dev
              </a>
            </div>
          </div>
        </div>
        <img src={logo} className="footer__logo" />
        <div className="footer__copyright">Black Horse © 2023, all rights reserved</div>
        <div className="footer__row">
          <div className="footer__row__item" data-selector="dev" onClick={handleNavLinkClick}>
            Web and Mobile development
          </div>
          <div className="footer__row__item" data-selector="design" onClick={handleNavLinkClick}>
            Web and Ux/Ui design
          </div>
          <div className="footer__row__item" data-selector="marketing" onClick={handleNavLinkClick}>
            Marketing and SEO
          </div>
          <div className="footer__row__item" data-selector="support" onClick={handleNavLinkClick}>
            Support & Maintenance
          </div>
          <div className="footer__row__item" data-selector="extra" onClick={handleNavLinkClick}>
            Other Services
          </div>
        </div>
      </footer>
    </Container>
  );
};
