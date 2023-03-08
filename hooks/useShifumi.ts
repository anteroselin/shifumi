import { ShifumiContext } from "context/ShifumiProvider";
import useContextOrError from "./useContextOrError";

const useShifumiContext = () => {
  return useContextOrError(ShifumiContext);
}

export default useShifumiContext;