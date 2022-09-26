import { colorTheme } from "../../../infrastructure/theme/color";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import {
  HeaderText,
} from "../../primary/typography/typography.component";
import { DropDown, DropDownContainer, DropDownOption, OptionContainer, Options } from "./styles";

const Head = ({ title, titleSize, displayRightSide,titleWeight,resFontSize,rightSideComponent,justifyContent }) => {
  return (
    <>
      <FlexibleDiv>
        <FlexibleDiv
          width={displayRightSide ? "40%" : "100%"}
          justifyContent={"flex-start"}
        >
          <HeaderText fontSize={titleSize} fontWeight={titleWeight} color={"white"} resFontSize={resFontSize} >
            {title}
          </HeaderText>
        </FlexibleDiv>

        <FlexibleDiv
          width={"60%"}
          justifyContent={justifyContent ? justifyContent :"space-evenly"}
          display={displayRightSide ? "flex" : "none"}
          breakPoint={'680px'}
         breakPointJustifyContent={"flex-end"}
        >
         {
            rightSideComponent ? rightSideComponent :


            <>
             <OptionContainer>
            <Options
              bg={colorTheme.primary_color}
              pd={"5px"}
              radius={"30px"}
              color={"white"}
              width={"100px"}
            >
              Action
            </Options>
            <Options>Adventures</Options>
            <Options>Racings</Options>
            <Options>Hard Core</Options>
          </OptionContainer>

          <DropDownContainer>
            <DropDown>
                <DropDownOption>
                    Action
                </DropDownOption>
                <DropDownOption>
                Adventures
                </DropDownOption>
                <DropDownOption>
                Racings
                </DropDownOption>
                <DropDownOption>
                Hard Core
                </DropDownOption>
            </DropDown>
          </DropDownContainer>
            </>

         }
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default Head;
