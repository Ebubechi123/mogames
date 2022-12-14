import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Image } from "../../primary/image/image.component";
import Img from "../../../assets/images/Rectangle 102.png";
import {
  HeaderText,
  Text,
} from "../../primary/typography/typography.component";
import { fontSizes } from "../../../infrastructure/fonts/sizes";
import Button from "../../primary/button/button.component";
import { Fade } from "react-awesome-reveal";

const WORK_WITH_US = () => {
  return (
    <Fade>
      <FlexibleDiv
        margin={"30px 0px"}
        position={"relative"}
        style={{ overflow: "hidden" }}
      >
        <Image src={Img} width="100%" height={"auto"} objectFit="cover" />
        <FlexibleDiv
          position={"absolute"}
          bg={"#3939ddad"}
          direction={"column"}
          padding={"50px"}
          breakPoint={"680px"}
          breakPointPadding={"0px"}
          breakPointdirection={"column"}
        >
          <HeaderText
            margin={"8px 0px"}
            color="white"
            fontSize={fontSizes.desktop_title}
            resFontSize={"large"}
          >
            Come work with us
          </HeaderText>
          <Text
            margin={"0px"}
            color="white"
            fontSize={"14px"}
            resFontSize={"x-small"}
          >
            Join the incredible team to build <br /> incredible products for
            players
          </Text>

          <FlexibleDiv
            justifyContent={"center"}
            gap={"96px"}
            padding={"30px 0px 0px 0px"}
            breakPoint={"680px"}
            breakPointPadding={"10px 0px 0px 0px "}
          >
            <Text
              margin={"0px"}
              color="white"
              fontSize={fontSizes.desktop_header}
              fontWeight={"600"}
              resFontSize={"x-large"}
            >
              100+
            </Text>
            <Text
              margin={"0px"}
              color="white"
              fontSize={fontSizes.desktop_header}
              fontWeight={"600"}
              resFontSize={"x-large"}
            >
              20+
            </Text>
          </FlexibleDiv>

          <FlexibleDiv
            justifyContent={"center"}
            gap={"150px"}
            padding={"0px 0px"}
            breakPoint={"680px"}
            breakPointgap={"99px"}
          >
            <Text
              margin={"0px"}
              color="white"
              fontSize={fontSizes.mobile_details}
              fontWeight={"300"}
              resFontSize={"x-small"}
            >
              Openings
            </Text>
            <Text
              margin={"0px"}
              color="white"
              fontSize={fontSizes.mobile_details}
              fontWeight={"300"}
              resFontSize={"x-small"}
            >
              Offices
            </Text>
          </FlexibleDiv>

          <FlexibleDiv padding={"20px 0px"}>
            <Button
              width={"120px"}
              background={"white"}
              radius={"50px"}
              padding={"8px"}
              color={"blue"}
              fontWeight={"500"}
            >
              Explore Careers
            </Button>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </Fade>
  );
};

export default WORK_WITH_US;
