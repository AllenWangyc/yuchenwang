import React, { useState, useEffect, useRef } from 'react';
import './Typewriter.styl';

/**
 * props.words: Array<string> 要循环打字/删除的句子列表
 * props.speed: 打字/删除的速度（ms）
 * props.pause: 每条打完后停顿多长时间再开始删除（ms）
 */
export default function Typewriter({
  words = ["I'm a Web Developer", "Welcome!"],
  speed = 150,
  pause = 2000,
}) {
  const [text, setText] = useState(''); // Current text
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    // Calculate the next text
    const nextText = deleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    // Set time when shift status of typing/deleting
    const isWordComplete = !deleting && nextText === currentWord;
    const isWordCleared = deleting && nextText === '';

    let delay = speed;
    if (isWordComplete) delay = pause;       // 打完后停顿
    else if (isWordCleared) delay = speed;       // 删完马上切换到下一个词

    timeoutRef.current = setTimeout(() => {
      setText(nextText);

      if (isWordComplete) {
        setDeleting(true);
      } else if (isWordCleared) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return (
    <span className="typewriter">
      I&#39;m a{' '}
      <span className="typewriter-text">{text}</span>
      <span className="cursor" />
    </span>
  );
}
