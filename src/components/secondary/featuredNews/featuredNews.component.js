import { fontSizes } from "../../../infrastructure/fonts/sizes";
import Button from "../../primary/button/button.component";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import Head from "../categories/head.component";
import Banner from "./banner.component";
import { LIST_OF_NEWS } from "./list_of_news";
import NewsCard from "./newsCard.component";
import {Fade }from "react-reveal"
import "./style.css"

const FeaturedNews = () => {
    return (
        <>
        <FlexibleDiv padding={'20px 0px'} width={'93%'} margin={'80px auto'} breakPoint={"780px"} breakPointPadding={'20px 0px'} breakPointwidth={'90%'} breakPointMargin={"80px auto"} >
           <Fade>
           <div style={{width:'100%'}} >
           <Head justifyContent={'end'} title={'Featured News'} titleSize={fontSizes.desktop_subtitle} titleWeight={"500"} resFontSize={"20px"} rightSideComponent={<Button children={'View all'} width={'120px'} radius={"50px"} padding={'6px'} />} displayRightSide={true} />
           </div>
           </Fade>


            <Banner/>

            <FlexibleDiv margin={'20px 0px'}>
                {LIST_OF_NEWS.map(({title,img,description})=>(
                 <Fade key={title} >
                  <div className="reveal-card">

                    <NewsCard title={title} img={img} description={description} key={title} />
                  </div>
                 </Fade>
                ))}
            </FlexibleDiv>
        </FlexibleDiv>
        
        </>
      );
}
 
export default FeaturedNews;