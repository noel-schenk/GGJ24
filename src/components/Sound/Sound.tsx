import { FC } from 'react';
import { SoundWrapper } from './Sound.styled';
import IntroMp3 from '../../assets/intro.mp3';

interface SoundProps { }

const Sound: FC<SoundProps> = () => (
   <SoundWrapper>
      <audio controls={true} autoPlay loop>
         <source src={IntroMp3} type="audio/mpeg" />
      </audio>
   </SoundWrapper>
);

export default Sound;
