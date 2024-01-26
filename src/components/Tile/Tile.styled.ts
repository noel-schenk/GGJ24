import styled from 'styled-components';
import config from '../../config';

export const TileWrapper = styled.div`
    --tw-bg: black;

    background: var(--tw-bg);
    width: 1em;
    height: 1em;

    &.move {
        animation-duration: ${config.movementSpeed.toFixed(5)}s;
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
        0%   {
            transform: translateY(-1em);
        }
        100%   {
            transform: translateY(0);
        }
        
    }
    @keyframes anim-tile-down {
        0%   {
            transform: translateY(1em);
        }
        100%   {
            transform: translateY(0);
        }
        
    }
    @keyframes anim-tile-right {
        0%   {
            transform: translateX(1em);
        }
        100%   {
            transform: translateX(0);
        }
        
    }
    @keyframes anim-tile-left {
        0%   {
            transform: translateX(-1em);
        }
        100%   {
            transform: translateX(0);
        }
        
    }
`;
