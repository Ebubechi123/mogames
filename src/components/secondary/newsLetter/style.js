import styled from "styled-components";
import headerImg from "../../../assets/images/newsletterImg.png"
export const InputWrapper = styled.div`
  background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
width:100%;
padding: 40px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-evenly;
position: relative;
flex-wrap: wrap;
@media screen and (max-width:780px) {
    gap:23px;
    padding: 20px;
}
`