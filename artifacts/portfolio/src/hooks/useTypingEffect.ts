import { useState, useEffect } from "react";
import { MOTION_DURATION_DEFAULT } from "@/constants/navigation.constants";

export function useTypingEffect(phrases: readonly string[], typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: number;
    const currentPhrase = phrases[loopNum % phrases.length];

    if (!currentPhrase) return;

    if (isDeleting) {
      if (text.length > 0) {
        timer = window.setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    } else {
      if (text.length < currentPhrase.length) {
        timer = window.setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}