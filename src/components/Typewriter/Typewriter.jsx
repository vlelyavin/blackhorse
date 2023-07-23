import React, { useEffect, useState } from "react";

export const Typewriter = ({ targetText, timeout, started }) => {
  const [text, setText] = useState("");
  let timer;

  const handleGenerate = () => {
    let i = -1;
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
      setText("");
    }

    return () => {
      clearInterval(timer);
    };
  }, [started]);
  return <span style={{ transition: "0.8s" }}>{text}</span>;
};
