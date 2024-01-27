import styled from "styled-components";

export const EndWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  margin: auto;
  padding: 10px 20px;
  height: 80%;
  width: 80%;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  p {
    strong {
      animation: happyColors 1s linear 0s infinite alternate;
      display: block;
      font-size: 80px;
    }
  }

  .End__Close {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 26px;
    color: white;
    background: black;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: white;
      color: black;
    }
  }

  @keyframes happyColors {
    0% {
      color: blue;
    }
    20% {
      color: red;
    }
    40% {
      color: green;
    }
    60% {
      color: yellow;
    }
    80% {
      color: pink;
    }
    100% {
      color: turquoise;
    }
  }
`;
