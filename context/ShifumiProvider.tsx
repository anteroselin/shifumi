import { createContext, PropsWithChildren, useState } from "react";
import { CHOICE, IShifuniContext } from "./types";

export const ShifumiContext = createContext<IShifuniContext | null>(null);

const ShifumiProvider = (props: PropsWithChildren<{}>) => {
  const [choice, setChoice] = useState<CHOICE>(CHOICE.ROCK);
  const [score, setScore] = useState<number>(0);

  return (
    <ShifumiContext.Provider
      value={{
        choice,
        setChoice,
        score,
        setScore,
      }}
    >
      {props.children}
    </ShifumiContext.Provider>
  );
};

export default ShifumiProvider;
