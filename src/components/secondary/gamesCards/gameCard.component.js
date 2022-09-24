import { Image } from "../../primary/image/image.component";
import { GameCardDetailsContainer, GameCardImgContainer, GameCardStyle, IconContainer } from "./styles";
import { Text } from "../../primary/typography/typography.component";
import { ArrowForwardIcon } from "../../primary/icons/icons.component";


const GameCard = ({img,date,name}) => {
    return ( 
        <>
        <GameCardStyle>
            <GameCardImgContainer>
                <Image src={img} width={'100%'} objectFit={'cover'} height={"100%"} />
            </GameCardImgContainer>
            <GameCardDetailsContainer>
                <Text margin={'0px'} fontSize={'small'}  >
                    {date}
                </Text>
                <Text margin={'0px'} fontSize={'medium'} fontWeight={'600'} >
                  {name}
                </Text>
                <IconContainer>
                 <ArrowForwardIcon color={'white'} />
                </IconContainer>
            </GameCardDetailsContainer>
        </GameCardStyle>
        </>
     );
}
 
export default GameCard;