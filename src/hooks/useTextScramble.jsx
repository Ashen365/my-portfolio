import React, { useEffect, useState } from 'react';

const useTextScramble = (text, speed = 80) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

  const scramble = (finalText) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  };

  return { displayText, scramble };
};

export default useTextScramble;
