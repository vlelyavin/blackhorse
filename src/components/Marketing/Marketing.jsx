import { Container } from "../Container";
import marketingLowerImage from "../../assets/images/marketingLowerImage.png";
import { Button } from "../Button";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const Marketing = () => {
  const observer = useInView({ threshold: 0.1 });
  return (
    <section className="marketing" ref={observer.ref}>
      <Container>
        <div className="marketing__inner">
          <div className="marketing__column">
            <div className="marketing__column__image__container">
              <img src={marketingLowerImage} alt="marketingLowerImage" className="marketing__column__image" />
            </div>
            <div className={classNames("marketing__column__title title", { animate: observer.inView })}>
              Marketing
              <br /> and seo
            </div>
            <div className={classNames("marketing__column__subtitle", { animate: observer.inView })}>
              Search engine marketing
            </div>
            <div className={classNames("marketing__column__text", { animate: observer.inView })}>
              Every project is selling something. Even a blog actually has something to sell — typically the blogger’s
              expertise.
              <br />
              <br />
              Our goal is not just to help you bring your idea to life, but also to help you sell it properly. We adapt
              our code from the beginning for the future development of our projects.
              <br />
              <br />
              We always offer discounts on marketing services to clients who have hired us to develop their product.
            </div>
            <div className="marketing__column__image__container">
              <img src={marketingLowerImage} alt="marketingLowerImage" className="marketing__column__image" />
            </div>
          </div>
          <div className="marketing__column">
            <div className={classNames("marketing__column__title title", { animate: observer.inView })}>
              Marketing
              <br /> and seo
            </div>
            <div className={classNames("marketing__column__subtitle", { animate: observer.inView })}>
              Search engine optimization
            </div>
            <div className={classNames("marketing__column__text", { animate: observer.inView })}>
              If you want to make the most of your online resource and aren’t using search engine optimization, you
              should seriously consider it. SEO website promotion will help you to:
            </div>
            <div className="marketing__column__benefits">
              <div className="marketing__column__benefit">Increase traffic</div>
              <div className="marketing__column__benefit">Increase profits</div>
              <div className="marketing__column__benefit">Popularize your brand</div>
            </div>
          </div>
          <Button className="marketing__button" />
        </div>
      </Container>
    </section>
  );
};
