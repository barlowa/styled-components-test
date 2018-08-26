
import styled from "styled-components";
import {keyframes} from "styled-components";

 const filters = keyframes`
  from {
    filter: blur(8px) opacity(0%) saturate(0%);
  }

  to {
    filter: blur(0px) opacity(100%) saturate(100%);
  }
`;

export const Container = styled.div`
  display: inline-block;
  width: auto;
  margin: 10px;
`;

export const Picture = styled.div`
  filter: none;
  animation: ${filters} 1s linear;
`;

export const Text = styled.div`
  animation: ${filters} 1s linear;
`;