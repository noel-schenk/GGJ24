import styled from 'styled-components';
import image from '../../assets/spriteatlas.png';
import config from '../../config';

export const MapWrapper = styled.div`
    background: green;
    width: 100vw;
    height: 100vh;
    font-size: 10vh;
    overflow: hidden;
    position: relative;
    contain: strict;
`;

export const RootScene = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    
    &.move {
        animation-duration: ${(config.movementSpeed * 1.01).toFixed(5)}s;
        animation-fill-mode: both;
        animation-timing-function: linear;
    }
    &.up {
        animation-name: anim-tile-up;
    }
    &.down {
        animation-name: anim-tile-down;
    }
    &.left {
        animation-name: anim-tile-left;
    }
    &.right {
        animation-name: anim-tile-right;
    }

    @keyframes anim-tile-up {
        0%   { transform: translateY(-1em); }
        100%   { transform: translateY(0); }
    }
    @keyframes anim-tile-down {
        0%   { transform: translateY(1em); }
        100%   { transform: translateY(0); }
    }
    @keyframes anim-tile-right {
        0%   { transform: translateX(1em); }
        100%   { transform: translateX(0); }
    }
    @keyframes anim-tile-left {
        0%   { transform: translateX(-1em); }
        100%   { transform: translateX(0); }
    }
`;

export const Player = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 1em;
    height: 1em;
    transform: translateX(calc(50vw - 0.5em)) translateY(calc(50vh - 0.5em));
    background: url(${image});
    background-size: 10em;
    background-position-y:-1em;

    &.up { background-position-x:-0em; }
    &.down { background-position-x:-1em; }
    &.left { background-position-x:-2em; }
    &.right { background-position-x:-3em; }
`;
