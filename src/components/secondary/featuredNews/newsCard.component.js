import { fontSizes } from "../../../infrastructure/fonts/sizes";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Image } from "../../primary/image/image.component";
import { Text } from "../../primary/typography/typography.component";
import Button from "../../primary/button/button.component";

const NewsCard = ({img,title,description}) => {
    return ( 
        <FlexibleDiv width={'30%'} breakPoint={'680px'} breakPointwidth={"100%"} >
            <FlexibleDiv height={'auto'}>
                <Image src={img} width={'100%'} height={'100%'} objectFit={'cover'} />
            </FlexibleDiv>
            <FlexibleDiv justifyContent={'center'}>
                <Text margin={'12px 0px'} color={"white"} fontSize={fontSizes.mobile_body_text} resFontSize={fontSizes.mobile_body_text}  fontWeight={"500"} >
                    {title}
                </Text>
            </FlexibleDiv>
            <FlexibleDiv style={{textAlign:'center'}} lineHeight={"1.2rem"} justifyContent={'center'}>
                <Text style={{padding:'0px 23px'}} margin={'0px'} color={"silver"}  fontSize={fontSizes.mobile_details} fontWeight={"400"}  resFontSize={fontSizes.mobile_smallest}  >
                  {description}
                </Text>
            </FlexibleDiv>
            <FlexibleDiv justifyContent={'center'} margin={'25px 0px'} >
                <Button width={'110px'} padding={'8px'} radius={'50px'} color={"white"} >
                    Read More
                </Button>

            </FlexibleDiv>
        </FlexibleDiv>
     );
}
 
export default NewsCard;