import styled from "styled-components";
import { colorTheme } from "../../../infrastructure/theme/color";

export const PreloaderWrapper = styled.div`
width:100%;
height: 100vh;
display: grid;
place-content: center;
background-color: ${colorTheme.primary_color};
`

export const Loading = styled.span`
font-size: 40px;
animation: blink 3s linear infinite;
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
`;