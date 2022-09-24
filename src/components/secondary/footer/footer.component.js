import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Text } from "../../primary/typography/typography.component";
import Bottom from "./bottom.component";
import { FooterLinks } from "./footerLinks";
import {
  FooterColumn,
  FooterLink,
  FooterLinksCol,
  FooterWrapper,
} from "./style";
const Footer = () => {
  return (
    <FooterWrapper>
      <FlexibleDiv
        margin={"auto"}
        position={"relative"}
        width={"60%"}
        alignItems={"baseline"}
        breakPoint={"680px"}
        breakPointJustifyContent={"flex-start"}
        breakPointAlign={"baseline"}
        breakPointwidth={"100%"}
      >
     
        {FooterLinks.map(({ title, links }) => (
         
         
              <FooterColumn key={title}>
                <Text
                  margin={"0px 0px 3px 0px"}
                  fontSize={"18px"}
                  fontWeight={"600"}
                >
                  {title}
                </Text>
                {links.map(({ link }, index) => (
                  <FooterLinksCol key={index}>
                    <FooterLink>{link}</FooterLink>
                  </FooterLinksCol>
                ))}
              </FooterColumn>

        ))}
        
      </FlexibleDiv>
      <Bottom />
    </FooterWrapper>
  );
};

export default Footer;
