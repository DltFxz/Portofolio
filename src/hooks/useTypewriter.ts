import { useState, useEffect } from 'react';

const useTypewriter = (texts: string[], speed: number = 100, deleteSpeed: number = 50, pauseTime: number = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setIsWaiting(true);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        setDisplayText(currentText.substring(0, charIndex - 1));
      } else {
        setCharIndex((prev) => prev + 1);
        setDisplayText(currentText.substring(0, charIndex + 1));
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isWaiting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return displayText;
};

export default useTypewriter;