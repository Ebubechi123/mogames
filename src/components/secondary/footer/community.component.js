import { fontSizes } from "../../../infrastructure/fonts/sizes";
import Button from "../../primary/button/button.component";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../primary/icons/icons.component";
import { Text } from "../../primary/typography/typography.component";
import { Fade } from "react-awesome-reveal";
const Community = () => {
  return (
    <>
      <Fade>
        <FlexibleDiv
          bg={"#f7f7f7"}
          padding={"3px 0px"}
          justifyContent={"center"}
          margin={"50px 0px 0px 0px"}
        >
          <FlexibleDiv width={"95%"}>
            <FlexibleDiv
              width={"50%"}
              justifyContent={"flex-start"}
              breakPoint={"680px"}
              breakPointwidth={"100%"}
              breakPointJustifyContent={"center"}
            >
              <FlexibleDiv
                width={"40%"}
                resPoint={"680px"}
                reswidth={"100%"}
                breakPoint={"920px"}
                breakPointwidth={"60%"}
              >
                <Text
                  fontWeight={"medium"}
                  fontSize={fontSizes.mobile_subtitle}
                  resFontSize={"16px"}
                >
                  MOGAMES Community
                </Text>
              </FlexibleDiv>
              <FlexibleDiv
                width={"60%"}
                justifyContent={"flex-start"}
                breakPoint={"920px"}
                resPoint={"680px"}
                reswidth={"100%"}
                breakPointwidth={"40%"}
                breakPointJustifyContent={"center"}
              >
                <Button width={"120px"} padding={"9px"} radius={"50px"}>
                  Join Now
                </Button>
              </FlexibleDiv>
            </FlexibleDiv>

            <FlexibleDiv
              width={"50%"}
              justifyContent={"flex-end"}
              breakPoint={"680px"}
              breakPointwidth={"100%"}
              breakPointJustifyContent={"center"}
              breakPointMargin={"20px 0px"}
            >
              <Text
                fontWeight={"medium"}
                fontSize={fontSizes.mobile_subtitle}
                resFontSize={"16px"}
              >
                Connect with us:
              </Text>

              <FlexibleDiv
                width={"40%"}
                gap={"10px"}
                breakPoint={"680px"}
                breakPointwidth={"100%"}
                breakPointgap={"22px"}
                breakPointJustifyContent={"center"}
              >
                <LinkedInIcon size={20} />
                <TwitterIcon size={20} />
                <FacebookIcon size={20} />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </Fade>
    </>
  );
};

export default Community;
