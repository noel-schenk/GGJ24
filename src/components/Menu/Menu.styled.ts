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
    width: calc(100% - 20px);
    padding: 40px 20px;
    background: #ffffffa6;
    border-radius: 20px;
  }
`;
