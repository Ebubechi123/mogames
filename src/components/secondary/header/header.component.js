import Hero from "./hero.component";
import NavBar from "./navbar.component";
import { HeaderStyle, HeaderWrapper} from "./styles";
import { gsap, } from "gsap";

const Header = () => {
    return (
      <>
        <HeaderWrapper>
          <HeaderStyle>
           <NavBar  />
            <Hero/>
          </HeaderStyle>
        </HeaderWrapper>
      </>
    );
}
 
export default Header;