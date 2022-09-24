import styled from "styled-components";
import headerImg from "../../../assets/images/headerImage.png"
import { Image } from "../../primary/image/image.component";
import { HeaderText } from "../../primary/typography/typography.component";
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 680px) {
   background-position: center;
  }
`;
export const HeaderStyle = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const NavbarWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  padding: 9px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBarStyle = styled.nav`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoSection = styled.div`
  width: 10%;
  @media only screen and (max-width: 880px) {
    width: 15%;
  }
  @media only screen and (max-width: 680px) {
    width: 90%;
  }
`;

export const RightSection = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  @media only screen and (max-width: 880px) {
    width: 85%;
  }
  @media only screen and (max-width: 680px) {
    width: 100%;
    z-index: 999;
    flex-direction: column;
    position: absolute;
    left: 0px;
    padding: ${({ padding }) => (padding ? padding : "0px")};
    overflow: hidden;
    background-color: black;
    top: 80px;
    max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "0px")};
    transition: max-height 0.5s;
    transition: padding 0.1s;
  }
`;

export const LinksSection = styled.div`
  position: relative;
  width: 80%;
  @media only screen and (max-width: 680px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  padding: 0px;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Link = styled.li`
  list-style-type: none;
  color: white;
  font-size: small;
  cursor: pointer;
  font-weight: 600;
  @media only screen and (max-width: 730px) {
    font-size: medium;
  }
`;

export const NavButtonSection = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const MenuSection = styled.div`
  width: 10%;
  display: none;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 680px) {
    display: flex;
  }
`;


export const HeroTitle = styled(HeaderText)`
font-family: 'Karantina', cursive;
font-style: normal;
font-weight: 700;
color: #E8B5FC;
text-shadow: 5px 4px 10px rgba(232, 181, 252, 0.5);
`



export const Phone1Container= styled.div`
position:absolute;
width: 100%;
left:30%;
top:-80px;
@media only screen and (max-width:780px) {
  left: 20%;
}
@media only screen and (max-width:680px) {
  left: inherit;
}
`
export const Phone2Container= styled.div`
z-index:1;
width: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
left:90px;
@media only screen and (max-width:780px) {
  left: 0%;
}
@media only screen and (max-width:680px) {
  left: 0px;
}
`

export const HeroImg1= styled(Image)`
position: relative;
@media only screen and (max-width:780px) {
  left: 10%;
}
`
export const HeroImg2= styled(Image)`
position: relative;
@media only screen and (max-width:780px) {
  left: 50px;
}
`