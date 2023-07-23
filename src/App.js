import "./assets/styles/main.scss";
import "./assets/styles/fonts.scss";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { Development } from "./components/Development";
import { Design } from "./components/Design";
import { Marketing } from "./components/Marketing";
import { Support } from "./components/Support";
import { Extra } from "./components/Extra";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Terms } from "./components/Terms";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { useState } from "react";

export const App = () => {
  const [isTermsElVisible, setTermsElVisibility] = useState(false);
  const [isPrivacyVisible, setPrivacyVisibility] = useState(false);

  const handleFooterLinkClick = () => {
    setTermsElVisibility(!isTermsElVisible);
  };

  const handleFooterPrivacyLinkClick = () => {
    setPrivacyVisibility(!isPrivacyVisible);
  };
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Development />
      <Design />
      <Marketing />
      <Support />
      <Extra />
      <Contact />
      <Footer
        handleFooterLinkClick={handleFooterLinkClick}
        handleFooterPrivacyLinkClick={handleFooterPrivacyLinkClick}
      />
      {isTermsElVisible && <Terms handleClick={handleFooterLinkClick} />}
      {isPrivacyVisible && <PrivacyPolicy handleClick={handleFooterPrivacyLinkClick} />}
    </>
  );
};
