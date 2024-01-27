import { FC, useEffect } from "react";
import { ScoreWrapper } from "./Score.styled";
import useGlobalState from "../../GlobalState";
import confetti from 'canvas-confetti';
import Laugh from '../../assets/laugh.mp3';

interface ScoreProps {}

const Score: FC<ScoreProps> = () => {
  const state = useGlobalState();

  useEffect(() => {
   state.subscribe('score', () => {
      console.log(state.score, 'state.score');
      confetti();
      const player = new Audio(Laugh);
      player.volume = 0.1;
      player.play();
   });
  }, [state.score]);

  return <ScoreWrapper>Score: {state.score}</ScoreWrapper>;
};

export default Score;
