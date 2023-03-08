import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import useShifumiContext from "hooks/useShifumi";
import { CHOICE } from "context/types";
import classNames from "classnames";
import styles from "./game.module.css";

enum RESULT {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

const Game: NextPage = () => {
  const { choice, setChoice, score, setScore } = useShifumiContext();

  const [bot, setBot] = useState<CHOICE | null>();
  const [result, setResult] = useState<RESULT>();

  const [counter, setCounter] = useState<number>(3);

  const newBotPick = () => {
    const choices = [CHOICE.PAPER, CHOICE.ROCK, CHOICE.SCISSORS];
    setBot(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newBotPick();
  }, []);

  const getResult = () => {
    if (choice === CHOICE.ROCK && bot === CHOICE.SCISSORS) {
      setResult(RESULT.WIN);
      setScore(score + 1);
    } else if (choice === CHOICE.ROCK && bot === CHOICE.PAPER) {
      setResult(RESULT.LOSE);
      setScore(score - 1);
    } else if (choice === CHOICE.SCISSORS && bot === CHOICE.PAPER) {
      setResult(RESULT.WIN);
      setScore(score + 1);
    } else if (choice === CHOICE.SCISSORS && bot === CHOICE.ROCK) {
      setResult(RESULT.LOSE);
      setScore(score - 1);
    } else if (choice === CHOICE.PAPER && bot === CHOICE.ROCK) {
      setResult(RESULT.WIN);
      setScore(score + 1);
    } else if (choice === CHOICE.PAPER && bot === CHOICE.SCISSORS) {
      setResult(RESULT.LOSE);
      setScore(score - 1);
    } else {
      setResult(RESULT.DRAW);
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : getResult();

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter, bot]);

  return (
    <div className={styles.game}>
      <div className={styles.game__you}>
        <span className={styles.game__you__text}>You Picked</span>
        <div
          className={classNames(
            styles.icon,
            styles[`icon--${choice}`],
            result === RESULT.WIN && styles.icon__winner
          )}
        ></div>
      </div>
      {result == RESULT.WIN && (
        <div className={styles.game__play}>
          <span className={styles.game__play__text}>You Win</span>
          <Link href="/">
            <a
              className={styles.game__play__again}
              onClick={() => setBot(null)}
            >
              Play Again
            </a>
          </Link>
        </div>
      )}
      {result == RESULT.LOSE && (
        <div className={styles.game__play}>
          <span className={styles.game__play__text}>You Lose</span>
          <Link href="/">
            <a
              className={styles.game__play__again}
              onClick={() => setBot(null)}
            >
              Play Again
            </a>
          </Link>
        </div>
      )}
      {result == RESULT.DRAW && (
        <div className={styles.game__play}>
          <span className={styles.game__play__text}>Draw</span>
          <Link href="/">
            <a
              className={styles.game__play__again}
              onClick={() => setBot(null)}
            >
              Play Again
            </a>
          </Link>
        </div>
      )}

      <div className={styles.game__bot}>
        <span className={styles.game__bot__text}>The Bot Picked</span>
        {counter == 0 ? (
          <div
            className={classNames(
              styles.icon,
              styles[`icon--${bot}`],
              result === RESULT.LOSE && styles.icon__winner
            )}
          ></div>
        ) : (
          <div className={styles.counter}>{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
