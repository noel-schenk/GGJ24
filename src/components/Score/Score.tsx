import { FC, useEffect } from "react";
import { ScoreWrapper } from "./Score.styled";
import useGlobalState from "../../GlobalState";
import confetti from 'canvas-confetti';

interface ScoreProps {}

const Score: FC<ScoreProps> = () => {
  const state = useGlobalState();

  useEffect(() => {
   state.subscribe('score', () => {
      console.log(state.score, 'state.score');
      confetti();
      debugger;
   });
  }, [state.score]);

  return <ScoreWrapper>Score: {state.score}</ScoreWrapper>;
};

export default Score;
