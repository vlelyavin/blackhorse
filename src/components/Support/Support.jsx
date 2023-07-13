import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import classNames from "classnames";

export const Support = () => {
  const observer = useInView({ threshold: 0.1 });
  return (
    <section className="support" ref={observer.ref}>
      <Container>
        <div className="support__inner">
          <div className="support__info">
            <div className={classNames("support__info__title title", { animate: observer.inView })}>
              support &<br /> maintenance
            </div>
            <div className={classNames("support__info__text", { animate: observer.inView })}>
              Every project has its own unique needs in terms of support, so we take an individualized approach to our
              clients and draw up action lists on a project-by-project basis.
              <br />
              <br />
              However, there are standard options. But every project is still unique, so we choose precisely what your
              specific project needs.
            </div>
          </div>
          <div className={classNames("support__services", { animate: observer.inView })}>
            <div className="support__services__column">
              <div className="support__services__column__item">Reserve data copying</div>
              <div className="support__services__column__item">Updating server software</div>
              <div className="support__services__column__item">Managing server users</div>
            </div>
            <div className="support__services__column">
              <div className="support__services__column__title">Services</div>
              <div className="support__services__column__item">Database optimization</div>
              <div className="support__services__column__item">Virus protection, etc.</div>
              <div className="support__services__column__button">Let’s talk</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
