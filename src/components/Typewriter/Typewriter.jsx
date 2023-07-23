import React, { useEffect, useState } from "react";

export const Typewriter = ({ targetText, timeout, started }) => {
  const [text, setText] = useState(targetText[0]);
  let timer;

  const handleGenerate = () => {
    let i = 0;
    timer = setInterval(() => {
      i++;
      if (i === targetText.length - 1) clearInterval(timer);
      setText((prev) => prev + targetText[i]);
    }, 70);
  };

  useEffect(() => {
    if (timeout) {
      setTimeout(() => {
        if (started) {
          handleGenerate();
        } else {
          setText(targetText[0]);
        }
      }, timeout);
    } else {
      if (started) {
        handleGenerate();
      } else {
        setText(targetText[0]);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeout, started]);
  return <span style={{ opacity: text.length === 1 ? 0 : 1 }}>{text}</span>;
};
