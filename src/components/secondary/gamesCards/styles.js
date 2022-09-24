import styled from "styled-components";


export const GameCardStyle = styled.div`
width: 85%;
@media screen and (max-width: 680px) {
   width: 100%;
}
`

export const GameCardImgContainer= styled.div`
width: 100%;
height: 190px;
`

export const GameCardDetailsContainer = styled.div`
background-color: white;
padding: 5px 10px;
line-height: 1.8em;
position: relative;
`

export const IconContainer = styled.div`
position: absolute;
z-index: 1;
right: 9px;
width: 13px;
height: 13px;
background-color:black;
border-radius: 50%;
top: 29%;
padding: 6px ;
display:grid;
place-content: center;
`