import { fontSizes } from "../../../infrastructure/fonts/sizes";
import { colorTheme } from "../../../infrastructure/theme/color";
import Button from "../../primary/button/button.component";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import {Text } from "../../primary/typography/typography.component";
import Iphone1 from "../../../assets/images/phone1.png"
import Iphone2 from "../../../assets/images/phone2.png"
import { HeroImg1, HeroImg2, HeroTitle, Phone1Container, Phone2Container } from "./styles";
import { useEffect, useState } from "react";




const Hero = () => { 
    const [opacity,setOpacity] =useState('0')
    const animation =()=>{
        setOpacity('1')
    }
    useEffect(()=>{
    animation()
    },[])
    return ( 
        <FlexibleDiv >
            <FlexibleDiv  padding={'35px 0px 5px 0px'} justifyContent={'center'} alignItems={"center"} >
                <HeroTitle className="headerText" style={{opacity:opacity,transition:"opacity 0.5s ease-in"}} fontSize={'126px'} textTransform={'uppercase'} margin={'0px'} color={'#d378d9'} fontWeigth={"700"} resFontSize={"98px"} >
                    Lastcall Man
                </HeroTitle>
            </FlexibleDiv>
            <FlexibleDiv padding={'5px 0px'} justifyContent={'center'} alignItems={"center"} >
                <Text style={{opacity:opacity,transition:"opacity 1.5s ease-in"}}  fontSize={fontSizes.desktop_details} margin={'0px'} color={'white'} fontWeigth={"700"} >
                   Available now for iOS, Andriod and all consoles.
                </Text>
            </FlexibleDiv>

            <FlexibleDiv padding={'30px 0px'} justifyContent={'center'} gap={'23px'} alignItems={"center"} >
              <Button style={{opacity:opacity,transition:"opacity 1.5s ease-in"}} width={"150px"} padding={"8px"} radius={"40px"}>
                Download
              </Button>
              <Button style={{opacity:opacity,transition:"opacity 1.5s ease-in"}} width={"150px"} padding={"8px"} radius={"40px"} background={'grey'} hoverBackground={colorTheme.primary_color} hoverBorder={'none'} hoverColor={'white'} >
               Explore
              </Button>
            </FlexibleDiv>


               <FlexibleDiv style={{opacity:opacity,transition:"opacity 1.5s ease-in",overflowX:'clip'}} className={".hero-img"}  margin={"80px 0px 0px 0px"} position={'relative'} justifyContent={'center'}  >
                <Phone1Container>
                <HeroImg1 src={Iphone1}  width={'28%'} height={'100%'} resPoint={"680px"} resWidth={"60%"} />
                </Phone1Container>
               <Phone2Container>
               <HeroImg2 src={Iphone2}  width={'28%'} height={'100%'} resPoint={"680px"} resWidth={"60%"} />
               </Phone2Container>
                </FlexibleDiv> 

                <FlexibleDiv margin={"82px auto"} width={'230px'} justifyContent={'flex-start'} height={'3px'} bg={'silver'} >
                    <FlexibleDiv width={'40%'} height={'100%'} bg={colorTheme.primary_color} />
                </FlexibleDiv>
        
        </FlexibleDiv>
     );
}
 
export default Hero;