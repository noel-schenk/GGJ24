import styled from "styled-components";

export const MenuWrapper = styled.div`
  .Menu__Cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .Menu__Interaction {
    width: 80%;
    margin: 0 auto;
    padding: 40px 20px;
    background: #ffffffe8;
    border-radius: 20px;
  }

  p {
    font-weight: bold;
  }

  .Menu__Keycontainer {
    display: flex;
    gap: 20px;
  }

  .Menu__Input {
    width: 100%;
    height: 50px;
    font-size: 14px;
    border-radius: 14px;
    border: none;
    padding: 4px 14px;
    outline: none;
  }
`;
