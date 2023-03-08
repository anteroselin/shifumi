import React, { MouseEvent } from "react";
import type { NextPage } from "next";

import useShifumiContext from "hooks/useShifumi";

import styles from "../styles/Home.module.css";
import { CHOICE } from "context/types";
import { useRouter } from "next/router";
import classNames from "classnames";

interface DivElementWithDataset extends HTMLDivElement {
  dataset: {
    id: CHOICE;
  };
}

const Home: NextPage = () => {
  const router = useRouter();
  const { choice, setChoice } = useShifumiContext();

  const setMyChoice = (e: MouseEvent<DivElementWithDataset>) => {
    setChoice(e.currentTarget.dataset.id);
    router.push("/game");
  };

  return (
    <div className={styles.playground}>
      <div className={styles.items}>
        <div
          data-id={CHOICE.ROCK}
          onClick={setMyChoice}
          className={classNames(styles.icon__rock, styles.icon)}
        ></div>
        <div
          data-id={CHOICE.SCISSORS}
          onClick={setMyChoice}
          className={classNames(styles.icon__scissors, styles.icon)}
        ></div>
        <div
          data-id={CHOICE.PAPER}
          onClick={setMyChoice}
          className={classNames(styles.icon__paper, styles.icon)}
        ></div>
      </div>
    </div>
  );
};

export default Home;
