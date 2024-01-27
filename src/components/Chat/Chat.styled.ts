import styled from "styled-components";

export const ChatWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: 20px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;

  &::before,
  &::after {
    content: "";
    border: 2px solid black;
    position: absolute;
    top: 3px;
    right: 3px;
    bottom: 3px;
    left: 3px;
    border-radius: 20px;
    pointer-events: none;
  }

  &::after {
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    border: 3px solid black;
  }

  .Chat__Input {
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;

    width: 100%;
    font-size: 30px;
    height: 30px;

    &.Chat__Input--edit {
      height: 120px;
      font-size: 14px;
    }
  }

  .Chat__Button {
    background: none;
  }

  .Chat__Edit {
    position: absolute;
    bottom: 74px;
    right: 0;
  }
`;
