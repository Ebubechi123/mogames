import { fontSizes } from "../../../infrastructure/fonts/sizes";
import { colorTheme } from "../../../infrastructure/theme/color";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Text } from "../../primary/typography/typography.component";


const Bottom = () => {
    let Time = new Date();
    let Year=  Time.getFullYear();
    return ( 
        <>
      <FlexibleDiv bg={'white'} justifyContent={'center'} direction={'column'} >
      <hr style={{width:"90%",height:"0.5px" ,background:'#ffffff3b'}}/>
     <FlexibleDiv>
     <FlexibleDiv width={'50%'} >
                   <Text color={colorTheme.grey} fontSize={fontSizes.mobile_details} resFontSize={'10px'} >
                     {Year}All Rights Reserved @MOGAMES
                   </Text>
                </FlexibleDiv>
                <FlexibleDiv width={'50%'} justifyContent={'center'} gap={"20px"} >
                       <Text color={colorTheme.grey} fontSize={fontSizes.mobile_details} resFontSize={'10px'}>Terms of Services</Text>
                       <Text color={colorTheme.grey} fontSize={fontSizes.mobile_details} resFontSize={'10px'}>Privacy Policy</Text>
                </FlexibleDiv>
     </FlexibleDiv>
      </FlexibleDiv>
        </>
     );
}
 
export default Bottom;