import FlexibleDiv from "../../primary/flexibleDiv/flexibleDiv.component";
import { Image } from "../../primary/image/image.component";
import bannerImg from '../../../assets/images/image 45.png'


const Banner = () => {
    return ( 
        <>
        <FlexibleDiv margin={"40px 0px"} >
            <Image src={bannerImg} width={'100%'} height={'100%'} objectFit={'cover'} />
        </FlexibleDiv>
        </>
     );
}
 
export default Banner;