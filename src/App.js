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

export const App = () => {
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
      <Footer />
    </>
  );
};
