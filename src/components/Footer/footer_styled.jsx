import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
${center}
justify-content: space-between;
padding-left: 40px;
height: 12vh;
`
export const Logo = styled.div`
${center}
`

export const Redes = styled.div`
width: 30vw;
${center}
justify-content: space-evenly;
`