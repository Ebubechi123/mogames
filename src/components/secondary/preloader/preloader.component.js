import { useState, useEffect, useMemo } from "react";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Text } from "../../primary/typography/typography.component";
import "./style1.css";
import { Loading } from "./styles";
const Preloader1 = () => {
  const texts = useMemo(
    () => ["Fetching Games", "Unboxing Games", "Setting up Games"],
    []
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts[index]);

  useEffect(() => {
    setText(texts[index]);
  }, [index, texts]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex(index === texts.length - 1 ? 0 : index + 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [text, index, texts.length]);

  return (
    <>
      <FlexibleDiv
        direction={"column"}
        justifyContent={"center"}
        height={"100%"}
      >
        <FlexibleDiv width={"300px"} margin={"30px 0px"}>
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <circle id="test" cx="40" cy="40" r="32"></circle>
            </svg>
          </div>

          <div className="loader triangle">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
          </div>

          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
            </svg>
          </div>

          <img
            src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
            alt=""
          />
        </FlexibleDiv>

        <FlexibleDiv>
          <Text fontSize={"19px"} color="white">
            {text}
            <Loading>...</Loading>
          </Text>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default Preloader1;
