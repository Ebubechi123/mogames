import { useEffect } from "react";
import { useState } from "react";
import { colorTheme } from "../../../infrastructure/theme/color";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { ArrowUpIcon } from "../../primary/icons/icons.component";


const BACK_TO_TOP = () => {
    const [display,setDisplay] = useState(false);
    const ScrollHandler=()=>{
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (
              document.body.scrollTop > 350 ||
              document.documentElement.scrollTop > 350
            ) {
             setDisplay(true)
            } else {
             setDisplay(false)
            }
          });
    },[])
    return ( 
        <FlexibleDiv display={display ? 'flex' :'none'} position={'fixed'} style={{cursor:'pointer'}} radius={"50%"} bg={colorTheme.primary_color} width={"20px"} right={"30px"} padding={"5px"} zIndex={"999"} top={"50%"} height={"20px"} >
           <ArrowUpIcon color={'white'} onClick={()=>ScrollHandler()} />
        </FlexibleDiv>
     );
}
 
export default BACK_TO_TOP;