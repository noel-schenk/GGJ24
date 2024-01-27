import { FC, useEffect } from "react";
import { ScoreWrapper } from "./Score.styled";
import useGlobalState from "../../GlobalState";
import confetti2 from 'canvas-confetti';
import Laugh from '../../assets/laugh.mp3';

interface ScoreProps { }

const Score: FC<ScoreProps> = () => {
  const state = useGlobalState();

  useEffect(() => {
    state.subscribe('score', () => {
      confetti();
      doLaugh();
    });
  }, [state.score]);

  return <ScoreWrapper>Score: {state.score}</ScoreWrapper>;
};

export const confetti = (random = false) => {
  if (random) {
    confetti2({origin: {x: Math.random(), y: Math.random()}})
    return;
  }
  confetti2();
}

export const doLaugh = () => {
  const player = new Audio(Laugh);
  player.volume = 0.1;
  player.play();
}

export default Score;
