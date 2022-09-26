import { fontSizes } from "../../../infrastructure/fonts/sizes";
import Button from "../../primary/button/button.component";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import Input from "../../primary/input/input.component";
import {
  HeaderText,
  Text,
} from "../../primary/typography/typography.component";
import Head from "../categories/head.component";
import { InputWrapper } from "./style";
import { Fade } from "react-awesome-reveal";

const NewsLetter = () => {
  return (
    <>
      <FlexibleDiv padding={"30px 0px"} justifyContent={"center"}>
        <FlexibleDiv width={"95%"}>
          <FlexibleDiv margin={"12px 0px"}>
            <div style={{ width: "100%" }}>
              <Fade>
                <Head
                  justifyContent={"flex-start"}
                  title={"NEWSLETTER"}
                  titleSize={"14px"}
                  titleWeight={"500"}
                  resFontSize={"14px"}
                />
              </Fade>
            </div>
          </FlexibleDiv>
          <Fade style={{width:'100%'}} >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InputWrapper>
                {/* Number of Subscription */}
                <FlexibleDiv
                  width={"15%"}
                  direction={"column"}
                  lineHeight={"2.3rem"}
                  alignItems={"flex-start"}
                  breakPoint={"780px"}
                  breakPointwidth={"100%"}
                  breakPointdirection={"column"}
                >
                  <HeaderText
                    margin={"0px"}
                    fontSize={fontSizes.desktop_title}
                    color={"white"}
                    fontWeight={"600"}
                  >
                    10000+
                  </HeaderText>
                  <Text
                    margin={"0px"}
                    color={"white"}
                    fontSize={fontSizes.mobile_smallest}
                  >
                    Subscription
                  </Text>
                </FlexibleDiv>
                <FlexibleDiv
                  width={"70%"}
                  breakPoint={"780px"}
                  breakPointwidth={"100%"}
                >
                  <Input
                    width={"100%"}
                    radius={"50px"}
                    padding={"15px"}
                    bg={"white"}
                    placeHolder={"Enter Email Address"}
                  />
                </FlexibleDiv>
                <FlexibleDiv
                  width={"15%"}
                  breakPoint={"780px"}
                  breakPointwidth={"100%"}
                >
                  <Button radius={"50px"} padding={"10px"} width={"120px"}>
                    Subscribe
                  </Button>
                </FlexibleDiv>
              </InputWrapper>
            </div>
          </Fade>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default NewsLetter;
