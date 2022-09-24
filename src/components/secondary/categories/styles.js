import styled from "styled-components";
import { colorTheme } from "../../../infrastructure/theme/color";

export const OptionContainer = styled.ul`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
padding: 0px;
@media screen and (max-width: 680px) {
    display: none;
}
`

export const Options = styled.li`
list-style: none;
font-size: 14px;
width: ${({width})=>width ? width :''};
color: ${({color})=>color ? color :'silver'};
background-color: ${({bg})=>bg ? bg :''};
border-radius: ${({radius})=>radius ? radius :''};
padding: ${({pd})=>pd ? pd :'0px'};
text-align: center;
cursor: pointer;
`

export const DropDownContainer = styled.div`
display: none;
width: 100px;
padding: 5px;
border-radius: 50px;
background-color: ${colorTheme.primary_color};
@media screen and (max-width: 680px) {
    display: block;
}
`

export const DropDown = styled.select`
color: white;
border: 0px;
outline: 0px;
width: 100%;
background:transparent;
`

export const DropDownOption = styled.option`
color:white
`