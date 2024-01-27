import { FC, useEffect, useRef } from 'react';
import { SoundWrapper } from './Sound.styled';
import IntroMp3 from '../../assets/intro.mp3';

interface SoundProps { }

const Sound: FC<SoundProps> = () => {
   const audioRef = useRef<HTMLAudioElement>(null);

   useEffect(() => {
      if (audioRef.current) {
         audioRef.current.volume = 0.04;
      }
   }, []);

   return <SoundWrapper>
      <audio ref={audioRef} controls={true} autoPlay loop>
         <source src={IntroMp3} type="audio/mpeg" />
      </audio>
   </SoundWrapper>
};

export default Sound;
