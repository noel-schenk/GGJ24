import styled from 'styled-components';
import config from '../../config';

export const TileWrapper = styled.div`
    width: 1em;
    height: 1em;
    position: absolute;
    // contain: strict;
    // content-visibility: auto;
    background-size: 10em;
`;

export const MessageWrapper = styled.div`
    position: absolute;
    font-size: 2vh;
    background: white;
    border: 2px solid black;
    padding: 0.7vh;
    border-radius: 1vh;
    width: 20vw;
    max-width: 50vw;
    max-height: 30vh;
    overflow:hidden;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-100%);
`;
