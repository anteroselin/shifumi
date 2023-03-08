import useShifumiContext from "hooks/useShifumi";
import { FC } from "react";

import styles from "./Header.module.css";

const Header: FC<{}> = () => {
  const { score } = useShifumiContext();

  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className={styles.score__box}>
        <span>Score</span>
        <div className={styles.score__box__score}>{score}</div>
      </div>
    </div>
  );
};

export default Header;
