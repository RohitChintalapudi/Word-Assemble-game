import React, { useState } from "react";
import Language from "./language";
import Header from "./Header";
import { languages } from "./languages";
import Getrandom from "./Random";

export default function Index() {
  const [currentWord, setCurrentWord] = useState(() => Getrandom());
  const [guessletter, setGuessLetter] = useState([]);

  const words = [...currentWord.toUpperCase()];

  const wrongGuess1 = guessletter.filter(
    (letter) => !currentWord.toUpperCase().includes(letter)
  );
  const wrongGuessCount = wrongGuess1.length;

const isGamewon = currentWord.toUpperCase().split("").every(letter => guessletter.includes(letter));
  const isGamelost = wrongGuessCount > languages.length - 1;
  const isGameover = isGamewon || isGamelost;

  const display_word = words.map((letter, index) => {
    const isGuess = guessletter.includes(letter);
    const shouldReveal = isGuess || isGameover;
    return (
      <span className="letters" key={index}>
        {shouldReveal ? letter : ""}
      </span>
    );
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alpha_letter = [...alphabet];

  function startnewgame() {
    setCurrentWord(Getrandom());
    setGuessLetter([]);
  }

  function HandleGuessedLetter(letter) {
    setGuessLetter((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );
  }

  const display_alpha = alpha_letter.map((item, index) => {
    const isGuess = guessletter.includes(item);
    const isCorrect = isGuess && currentWord.toUpperCase().includes(item);
    const isWrong = isGuess && !currentWord.toUpperCase().includes(item);

    let buttonClass = "buttons";
    if (isCorrect) buttonClass += " correct";
    else if (isWrong) buttonClass += " wrong";

    return (
      <button
        className={buttonClass}
        onClick={() => HandleGuessedLetter(item)}
        key={index}
        disabled={isGameover}
      >
        {item}
      </button>
    );
  });

  let classnameres = "result-box";
  if (isGamewon) {
    classnameres += "1";
  } else if (isGamelost) {
    classnameres += "2";
  }

  function renderGame() {
    if (!isGameover) return null;

    if (isGamewon) {
      return (
        <div className={classnameres}>
          <p className="win">You win!</p>
          <p className="win-desc">Well done!✨</p>
        </div>
      );
    } else {
      return (
        <div className={classnameres}>
          <p className="win">You lost!</p>
          <p className="win-desc">Try again. 💀</p>
        </div>
      );
    }
  }

  return (
    <div className="outer-box">
      <div className="header-box">
        <Header />
      </div>

      {renderGame()}

      <div className="language-box">
        <Language count={wrongGuessCount} />
      </div>

      <div className="word-box">{display_word}</div>
      <div className="alphabet-box">{display_alpha}</div>

      {isGameover && (
        <div>
          <button onClick={startnewgame} className="newgame">New Game</button>
        </div>
      )}
    </div>
  );
}
