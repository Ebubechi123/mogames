import { Image } from "../../primary/image/image.component";
import logo from "../../../assets/images/logo.png"
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Text } from "../../primary/typography/typography.component";
import { fontSizes } from "../../../infrastructure/fonts/sizes";
import styled from "styled-components";

const LogoImage = styled(Image)`
@media  only screen and (max-width:680px){
    width:10%;
}
`

const Logo = () => {
    return ( 
        <>
       <FlexibleDiv  justifyContent={'center'} gap={"5px"} breakPoint={"680px"} breakPointJustifyContent={'flex-start'} >
        <LogoImage src={logo} width={"25%"} height={"inherit"} objectFit={'cover'}/>
        <Text fontWeight={'700'} margin={'0px'} color={"white"} fontSize={fontSizes.mobile_details} resfontSize={"12px"} >mogames</Text>
       </FlexibleDiv>
        </>
     );
}
 
export default Logo;