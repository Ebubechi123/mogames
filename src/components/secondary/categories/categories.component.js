import { fontSizes } from "../../../infrastructure/fonts/sizes";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import Category from "./category.component";
import Head from "./head.component";
import { LIST_OF_CATEGORIES } from "./list_of_categories";
import { Fade } from "react-awesome-reveal";
const Categories = () => {
  return (
    <FlexibleDiv justifyContent={"center"}>
      <FlexibleDiv
        padding={"20px 0px"}
        margin={"80px 0px"}
        width={"95%"}
        breakPoint={"780px"}
        breakPointPadding={"20px 0px"}
        breakPointwidth={"90%"}
        breakPointMargin={"80px auto"}
      >
        <div style={{ width: "100%" }}>
          <Fade>
            <Head
              title={"Categories"}
              titleSize={fontSizes.desktop_subtitle}
              resFontSize={"23px"}
              displayRightSide={true}
              titleWeight={"600"}
            />
          </Fade>
        </div>
        {LIST_OF_CATEGORIES.map(({ categoryName, games }) => (
          <div key={categoryName} style={{ width: "100%" }}>
            <Fade>
              <Category
                className={categoryName}
                key={categoryName}
                categoryName={categoryName}
                games={games}
              />
            </Fade>
          </div>
        ))}
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Categories;
