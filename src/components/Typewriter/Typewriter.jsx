import React, { useEffect, useState } from "react";

export const Typewriter = ({ targetText, timeout, started }) => {
  const [text, setText] = useState(targetText[0]);
  let timer;

  const handleGenerate = () => {
    let i = 0;
    // setTimeout(() => {
    // }, timeout);
    timer = setInterval(() => {
      i++;
      if (i === targetText.length - 1) clearInterval(timer);
      setText((prev) => prev + targetText[i]);
    }, 80);
  };

  useEffect(() => {
    if (started) {
      handleGenerate();
    } else {
      setText(targetText[0]);
    }

    return () => {
      clearInterval(timer);
    };
  }, [started]);
  return <span style={{ opacity: text.length === 1 ? 0 : 1, transition: "0.8s" }}>{text}</span>;
};
