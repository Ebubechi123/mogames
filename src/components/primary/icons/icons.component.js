import { MdClose,MdMenu }from "react-icons/md"
import { IoIosArrowForward }from "react-icons/io"
import { FaFacebook,FaLinkedin,FaTwitter }from "react-icons/fa"


export const MenuOpenIcon = ({size,color,style,onClick})=>{
    return(
        <MdMenu size={size} color={color} style={style} onClick={onClick}/>
    )
}
export const MenuCloseIcon = ({size,color,style,onClick})=>{
    return(
        <MdClose size={size} color={color} style={style} onClick={onClick}/>
    )
}

export const ArrowForwardIcon = ({size,color,style,onClick})=>{
    return(
        <IoIosArrowForward size={size} color={color} style={style} onClick={onClick}/>
    )
}
export const TwitterIcon = ({size,color,style,onClick})=>{
    return(
        <FaTwitter size={size} color={color} style={style} onClick={onClick}/>
    )
}
export const FacebookIcon = ({size,color,style,onClick})=>{
    return(
        <FaFacebook size={size} color={color} style={style} onClick={onClick}/>
    )
}
export const LinkedInIcon = ({size,color,style,onClick})=>{
    return(
        <FaLinkedin size={size} color={color} style={style} onClick={onClick}/>
    )
}