import { useRef } from "react";
import { Container } from "../Container";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { Typewriter } from "../Typewriter";

export const Contact = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [company, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [statusText, setStatusText] = useState("");
  const form = useRef();
  const observer = useInView({ threshold: 0.1 });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    // Validate name
    if (first_name.trim() === "") {
      newErrors.first_name = "Ім'я обов'язкове";
    }

    // Validate phone
    if (email.trim() === "") {
      newErrors.email = "Введіть пошту";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.trim())) {
      newErrors.email = "Невірний формат пошти";
    }

    // Validate message
    if (message.trim() === "") {
      newErrors.message = "Введіть своє повідомлення";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatusText("Ваше повідомлення надіслано!");
          setTimeout(() => {
            setStatusText("");
          }, 2000);
        },
        (error) => {
          setStatusText("Сталася помилка");
          setTimeout(() => {
            setStatusText("");
          }, 2000);
        }
      );
    form.current.reset();
  };
  return (
    <Container>
      <form className="contact" ref={form}>
        <div className="contact__upper" ref={observer.ref}>
          <div className={classNames("contact__upper__title title", { animate: observer.inView })}>
            <svg
              className={classNames("contact__upper__title__icon", { animate: observer.inView })}
              width="197"
              height="197"
              viewBox="0 0 197 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95.1944 74.9071L129.056 59.0658L136.976 75.9956L116.117 85.7552L134.999 98.9407L140.349 91.2785L152.635 122.656L118.946 121.928L124.296 114.266L93.6455 92.8617L95.1944 74.9071Z"
                fill="#4946C3"
              />
              <path
                d="M104.893 123.98L70.994 139.74L63.1147 122.791L83.9962 113.083L65.1483 99.8519L59.7791 107.501L47.5687 76.0944L81.2555 76.9024L75.8855 84.5527L106.485 106.031L104.893 123.98Z"
                fill="#4946C3"
              />
            </svg>
            <Typewriter targetText="let's get in" timeout={100} started={observer.inView} />
            <br />
            <Typewriter targetText="touch" timeout={800} started={observer.inView} />
          </div>
          <div className={classNames("contact__upper__subtitle", { animate: observer.inView })}>
            Leave your contact
            <br /> information so we
            <br /> can contact you
          </div>
        </div>
        <div className="contact__form">
          <div className="contact__form__column">
            <div className="contact__form__column__input__block">
              <div className="contact__form__column__input__block__title">First Name</div>
              <input
                placeholder="John"
                type="text"
                name="first_name"
                className="contact__form__column__input__block__input"
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    first_name: "",
                  }));
                }}
                style={{ boxShadow: errors.first_name && "0 0 0 3px rgb(255, 59, 59)" }}
                value={first_name}
              />
            </div>
            <div className="contact__form__column__input__block">
              <div className="contact__form__column__input__block__title">Second Name</div>
              <input
                placeholder="Smith"
                type="text"
                name="last_name"
                className="contact__form__column__input__block__input"
                onChange={(e) => {
                  setLastName(e.target.value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    last_name: "",
                  }));
                }}
                style={{ boxShadow: errors.last_name && "0 0 0 3px rgb(255, 59, 59)" }}
                value={last_name}
              />
            </div>
          </div>
          <div className="contact__form__column">
            <div className="contact__form__column__input__block">
              <div className="contact__form__column__input__block__title">Your company</div>
              <input
                placeholder="NexoExample Ltd"
                type="text"
                name="company"
                className="contact__form__column__input__block__input"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    company: "",
                  }));
                }}
                style={{ boxShadow: errors.company && "0 0 0 3px rgb(255, 59, 59)" }}
                value={company}
              />
            </div>
            <div className="contact__form__column__input__block">
              <div className="contact__form__column__input__block__title">Your mail</div>
              <input
                placeholder="example@mail.com"
                type="email"
                name="email"
                className="contact__form__column__input__block__input"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "",
                  }));
                }}
                style={{ boxShadow: errors.email && "0 0 0 3px rgb(255, 59, 59)" }}
                value={email}
              />
            </div>
          </div>
          <div className="contact__form__textarea__container">
            <div className="contact__form__column__input__block__title">Tell us what interests you</div>
            <textarea
              placeholder="Tell us what interests you:"
              name="message"
              className="contact__form__textarea"
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  message: "",
                }));
              }}
              style={{ boxShadow: errors.message && "0 0 0 3px rgb(255, 59, 59)" }}
              value={message}
            />
          </div>
        </div>
        <button className="contact__button__container" onClick={handleSubmit}>
          <svg
            className="contact__button"
            width="54"
            height="55"
            viewBox="0 0 54 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.4968 21.6547C3.3285 21.2653 3.31929 20.637 4.52083 20.2364L47.1939 6.01213C48.3753 5.61827 49.0529 6.27964 48.722 7.43841L36.5298 50.1114C36.1922 51.2931 35.5109 51.334 35.0117 50.2107L26.9753 32.1287L40.3901 14.2422L22.5037 27.6571L4.4968 21.6547Z"
              fill="#171717"
            />
          </svg>
        </button>
        <p className="contact__form__status">{statusText}</p>
      </form>
    </Container>
  );
};
