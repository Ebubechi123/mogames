import styled from "styled-components";

export const FooterWrapper= styled.footer`
width: 100%;
background-color: white;
/* display: flex;
align-items: center;
justify-content: center;
position: relative; */
bottom: 0px;
left: 0px;
padding: 50px 0px;
flex-direction: column;
`


export const FooterColumn = styled.div`
flex-basis: 30%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width:680px) {
    margin-top: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 33px;
}

`

export const FooterLinksCol = styled.ul`
padding: 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 22px;

`


export const FooterLink = styled.li`
font-size: 15px;
font-weight: 500;
list-style: none;
text-align: left;
cursor: pointer;

`