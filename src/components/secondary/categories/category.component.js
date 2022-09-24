import { fontSizes } from "../../../infrastructure/fonts/sizes";
import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import Carousel from "../carousel/carousel.component";
import GameCard from "../gamesCards/gameCard.component";
import Head from "./head.component";



const Category = ({categoryName,games}) => {
    return ( 
        <FlexibleDiv padding={'12px 0px'} direction={'column'}>
        <Head title={categoryName} titleSize={fontSizes.mobile_subtitle} titleWeight={'500'} resFontSize={'17px'} displayRightSide={false}/>

        <FlexibleDiv justifyContent={'flex-start'} gap={'12px'} >
        <div className="event-row-carousel">
        <Carousel>
          {games.map(({name,img,date},index)=>(
                <GameCard name={name} img={img} date={date} key={index}/>
            ))}
          </Carousel>
        </div>
       
        </FlexibleDiv>
        </FlexibleDiv>
     );
}
 
export default Category;