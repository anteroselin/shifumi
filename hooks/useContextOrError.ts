import { Context, useContext } from "react";

const useContextOrError = <T>(context: Context<T | null>) => {
  const data = useContext(context);
  if (!data)
    throw new Error(
      `Please mount ${context.displayName} before using the useContext`
    );
  return data;
}

export default useContextOrError;