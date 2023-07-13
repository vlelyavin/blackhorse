import classNames from "classnames";

export const Button = ({ className }) => {
  return (
    <div
      className={classNames("button", { [className]: className })}
      onClick={() => document.querySelector(".contact").scrollIntoView({ block: "start", behavior: "smooth" })}
    >
      <div className="button__text">
        Let’s
        <br /> Talk
      </div>
    </div>
  );
};
