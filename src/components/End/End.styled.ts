import styled from "styled-components";

export const EndWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  padding: 10px 20px;
  height: 100%;
  width: 400px;
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

      border-radius: 20px;
      background: white;
      width: 120px;
      margin: 0 auto;
    }
  }

  .End__Close {
    position: absolute;
    top: 10px;
    right: 20px;
    text-align: center;
    line-height: 26px;
    color: white;
    background: black;
    width: auto;
    border-radius: 20px;
    padding: 8px 16px;
    height: auto;
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
