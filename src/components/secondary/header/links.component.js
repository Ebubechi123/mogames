import { NavLinks } from "./navLinks";
import { Link, LinkWrapper } from "./styles";


const Links = () => {
    return ( 
        <LinkWrapper>
        {NavLinks.map(({link})=>(
        <Link key={link} >
        {link}
        </Link>
        ))}
        </LinkWrapper>
     );
}
 
export default Links;