import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import classNames from "classnames";
import { Typewriter } from "../Typewriter";

export const Extra = () => {
  const observer = useInView({ threshold: 0.1 });
  return (
    <section className="extra" ref={observer.ref}>
      <Container>
        <div className="extra__inner">
          <div className={classNames("extra__title title", { animate: observer.inView })}>
            <Typewriter targetText="also we do" timeout={100} started={observer.inView} />
          </div>
          <div className="extra__grid">
            <div className={classNames("extra__grid__item", { animate: observer.inView })}>
              <div className="extra__grid__item__title">QA</div>
              <div className="extra__grid__item__text">
                As an integral part of any software development project, QA is a vital part of service portfolio. Our QA
                expertise encompasses a wide range of testing types and ensures that the solutions that are delivered to
                our customers are reliably protected against hacks, perform well under high load, and operate as
                expected.
              </div>
              <div className="extra__grid__item__services">
                <div className="extra__grid__item__services__item">A\B testing</div>
                <div className="extra__grid__item__services__item">Manual testing</div>
                <div className="extra__grid__item__services__item">High-load testing</div>
              </div>
            </div>

            <div className={classNames("extra__grid__item", { animate: observer.inView })}>
              <div className="extra__grid__item__title">Project management</div>
              <div className="extra__grid__item__text">
                Proper project management is the pillar on which the success of every project rests. Our team of project
                managers ensures the timely completion of every project with a predefined level of quality and within a
                previously agreed-upon budget.
                <br />
                <br />
                Project managers are responsible for overseeing workflow, communicating with clients, meeting deadlines,
                and fulfilling responsibilities to customers. All managers are, without exception, fluent in English. It
                is never the case that we do not understand our client. If a client does not have a preferred project
                management platform, we use our company’s Jira & Kanban platform. But everything is agreed upon at the
                beginning of the project and depends on the client's preferences.
                <br />
                <br />
                We are always ready to reconfigure our procedures to meet new conditions. If a client does not have a
                preferred project management platform, we use our company’s Basecamp 3 platform. We are always willing
                to listen to your suggestions.
              </div>
              <div className="extra__grid__item__services">
                <div className="extra__grid__item__services__item">Manage project lifecycle</div>
                <div className="extra__grid__item__services__item">Document tech and projects</div>
                <div className="extra__grid__item__services__item">Delegate team tasks</div>
              </div>
            </div>

            <div className={classNames("extra__grid__item", { animate: observer.inView })}>
              <div className="extra__grid__item__title">Specification and Prototyping</div>
              <div className="extra__grid__item__text">
                The project's beginning is crucial as it establishes the foundation for business development. Having a
                statement of work, prototype, or design document is essential for a successful start, reducing costs and
                time. Our service pack includes project documentation, prototype, evaluation, and roadmap.
                <br />
                <br />
                This information can attract investors and facilitate strategy formulation, step-by-step project
                development, and planning of advertising campaigns and accompanying activities.
              </div>
              <div className="extra__grid__item__services">
                <div className="extra__grid__item__services__item">Technologies recommendation</div>
                <div className="extra__grid__item__services__item">Roadmap creation</div>
                <div className="extra__grid__item__services__item">Prototyping and wireframing development</div>
                <div className="extra__grid__item__services__item">Specification writing</div>
                <div className="extra__grid__item__services__item">Site structure design</div>
              </div>
            </div>

            <div className={classNames("extra__grid__item", { animate: observer.inView })}>
              <div className="extra__grid__item__title">Database design</div>
              <div className="extra__grid__item__text">
                Effective database design is vital for scalability, performance, and stability in web applications. Our
                expertise lies in implementing advanced strategies such as load balancing, data replication, and
                sharding for high-traffic solutions.
                <br />
                <br />A well-thought-out architecture ensures seamless integration of new functionalities and
                anticipates user needs intuitively. Experience the convenience of having everything you want at your
                fingertips, even the unspoken desires.
              </div>
              <div className="extra__grid__item__services">
                <div className="extra__grid__item__services__item">Database development</div>
                <div className="extra__grid__item__services__item">+ management</div>
                <div className="extra__grid__item__services__item">+ maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
