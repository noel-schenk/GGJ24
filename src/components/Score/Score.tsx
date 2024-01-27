import { FC, useEffect } from "react";
import { ScoreWrapper } from "./Score.styled";
import useGlobalState from "../../GlobalState";

interface ScoreProps {}

const Score: FC<ScoreProps> = () => {
  const state = useGlobalState();

  useEffect(() => {
   state.subscribe('score--new', () => {

   });
  }, []);

  return <ScoreWrapper>Score: {state.score}</ScoreWrapper>;
};

export default Score;
