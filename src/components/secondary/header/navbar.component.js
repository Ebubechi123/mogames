import { useState } from "react";
import Button from "../../primary/button/button.component";
import { MenuCloseIcon, MenuOpenIcon } from "../../primary/icons/icons.component";
import Links from "./links.component";
import Logo from "./logo.component";
import { LinksSection, LogoSection, RightSection, NavBarStyle, NavbarWrapper, NavButtonSection, MenuSection} from "./styles";
import { Fade } from "react-awesome-reveal";
const NavBar = () => {
    const [toggleMenu,setToggleMenu] =useState(false)
    return (
      <>

     <Fade>
     <NavbarWrapper>
          <NavBarStyle>
            <LogoSection>
              <Logo />
            </LogoSection>

            <RightSection maxHeight={toggleMenu ? "300px" : "0px"} padding={toggleMenu ? '30px 0px' :'0px'} >
              <LinksSection>
                <Links />
              </LinksSection>
              <NavButtonSection>
                <Button width={"100px"} padding={"8px"} radius={"40px"}>
                  Login
                </Button>
              </NavButtonSection>
            </RightSection>

            <MenuSection>
              {toggleMenu ? (
                <MenuCloseIcon
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  color={"white"}
                  size={24}
                />
              ) : (
                <MenuOpenIcon
                  onClick={() => {
                    setToggleMenu(true);
                  }}
                  color={"white"}
                  size={24}
                />
              )}
            </MenuSection>
          </NavBarStyle>
        </NavbarWrapper>

     </Fade>
      </>
    );
}
 
export default NavBar;