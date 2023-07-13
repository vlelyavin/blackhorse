import { useState } from "react";
import { Container } from "../Container";
import classNames from "classnames";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  const [isMenuVisible, toggleMenuVisibility] = useState(false);
  const options = {
    block: "start",
    behavior: "smooth",
  };
  const handleNavLinkClick = (e) => {
    document.querySelector(`.${e.target.dataset.selector}`).scrollIntoView(options);
    toggleMenuVisibility(false);
  };
  return (
    <>
      <header className="header">
        <Container>
          <div className="header__inner">
            <img className="header__logo" src={logo} onClick={() => window.scrollTo(0, 0)} />
            <div className="header__menu" onClick={() => toggleMenuVisibility(!isMenuVisible)}>
              <div className="header__menu__line"></div>
              <div className="header__menu__line"></div>
              <div className="header__menu__line"></div>
            </div>
          </div>
        </Container>
      </header>
      <div className={classNames("menu", { menuActive: isMenuVisible })}>
        <div className="menu__burger" onClick={() => toggleMenuVisibility(!isMenuVisible)}>
          <div className="menu__burger__line"></div>
          <div className="menu__burger__line"></div>
          <div className="menu__burger__line"></div>
        </div>
        <div className="menu__services">
          <div className="menu__services__title">
            Technology
            <br /> services
          </div>
          <div className="menu__services__list">
            <div className="menu__services__list__column">
              <div className="menu__services__list__column__item" data-selector="dev" onClick={handleNavLinkClick}>
                Web and Mobile <br /> development
              </div>
              <div className="menu__services__list__column__item" data-selector="design" onClick={handleNavLinkClick}>
                Web and UX/Ui <br /> design
              </div>
              <div className="menu__services__list__column__item" data-selector="extra" onClick={handleNavLinkClick}>
                Other <br /> Services
              </div>
            </div>
            <div className="menu__services__list__column">
              <div
                className="menu__services__list__column__item"
                data-selector="marketing"
                onClick={handleNavLinkClick}
              >
                Marketing <br /> and SEO
              </div>
              <div className="menu__services__list__column__item" data-selector="support" onClick={handleNavLinkClick}>
                Support & <br /> Maintenance
              </div>
            </div>
          </div>
        </div>
        <div className="menu__contacts">
          <div className="menu__contacts__title">Contacts</div>
          <div className="menu__contacts__line">
            <svg
              className="menu__contacts__line__icon"
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29635 14.9043C2.74673 14.4617 0 11.4337 0 7.76419C0 3.79004 3.22168 0.568359 7.19583 0.568359C11.17 0.568359 14.3917 3.79004 14.3917 7.76419C14.3917 11.4337 11.6449 14.4617 8.09531 14.9043V17.6585H6.29635V14.9043ZM0.899479 18.5579H13.4922V20.3569H0.899479V18.5579Z"
                fill="#B1C346"
              />
            </svg>
            <div className="menu__contacts__line__text">
              3rd Floor Suite , 207 Regent
              <br /> Street, London,
              <br /> W1B3HH
            </div>
          </div>
        </div>
        <div className="menu__contacts__line">
          <svg
            className="menu__contacts__line__icon"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3 0H24.7C25.418 0 26 0.59696 26 1.33333V22.6667C26 23.4031 25.418 24 24.7 24H1.3C0.582036 24 0 23.4031 0 22.6667V1.33333C0 0.59696 0.582036 0 1.3 0ZM13.0788 11.5772L4.74139 4.31693L3.05861 6.34973L13.095 15.0895L22.9507 6.34155L21.2493 4.32512L13.0788 11.5772Z"
              fill="#B1C346"
            />
          </svg>

          <a href="mailto:office@quantumtech.dev" className="menu__contacts__line__text">
            office@quantumtech.dev
          </a>
        </div>
        <div className="menu__contacts__line">
          <svg
            className="menu__contacts__line__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M26.3636 9.22727C27.8197 9.22727 29 10.4076 29 11.8636V17.1364C29 18.5924 27.8197 19.7727 26.3636 19.7727H24.9639C24.3152 24.9747 19.8777 29 14.5 29V26.3636C18.8681 26.3636 22.4091 22.8226 22.4091 18.4545V10.5455C22.4091 6.17738 18.8681 2.63636 14.5 2.63636C10.1319 2.63636 6.59091 6.17738 6.59091 10.5455V19.7727H2.63636C1.18034 19.7727 0 18.5924 0 17.1364V11.8636C0 10.4076 1.18034 9.22727 2.63636 9.22727H4.03613C4.68481 4.02532 9.12232 0 14.5 0C19.8777 0 24.3152 4.02532 24.9639 9.22727H26.3636ZM8.91017 19.4892L10.3076 17.2533C11.523 18.0145 12.9601 18.4545 14.5 18.4545C16.0399 18.4545 17.477 18.0145 18.6923 17.2533L20.0899 19.4892C18.4693 20.5042 16.5532 21.0909 14.5 21.0909C12.4468 21.0909 10.5307 20.5042 8.91017 19.4892Z"
              fill="#B1C346"
            />
          </svg>

          <a href="tel:+447537142868" className="menu__contacts__line__text">
            +44 753 714 28 68
          </a>
        </div>
      </div>
    </>
  );
};
