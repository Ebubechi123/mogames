import styled from 'styled-components';

export const Image = styled.img`
width:${({width})=>width ? width :''};
height:${({height})=>height ? height :''};
border-radius: ${({radius})=>radius ? radius :''};
object-fit: ${({objectFit})=>objectFit ? objectFit :'cover'};
@media screen and (max-width: ${({resPoint})=>resPoint ? resPoint :""}) {
    width:${({resWidth})=>resWidth ? resWidth :''};
height:${({resHeight})=>resHeight ? resHeight :''};
}
`