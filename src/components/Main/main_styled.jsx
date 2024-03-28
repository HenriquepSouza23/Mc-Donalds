import styled,{css} from "styled-components"

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Promocao = styled.section`
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
}
`
export const Center = styled.div`
/* border: solid 2px red; */
width: 70vw;
${center}
justify-content: space-around;
`
export const Card = styled.div`
/* border: solid 2px green; */
height: 45vh;
text-align: center;
background-color: white;
border-radius: 13px;
p{
   font-weight: 700;
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}
`
export const BoxProdutos = styled.section`
/* border: solid 2px green; */
height: 80vh;
background-color: #FFC72C;
${center}
flex-direction: column;
justify-content: space-around;
`
export const Opcao = styled.figure`
   /* border: solid 2px green; */
   width: 38vw;
   ${center}
   justify-content: space-around;
   cursor: pointer;
`

export const Principal = styled.div`
   /* border: solid 2px red; */
   img{
      width: 15vw;
   }
`

export const Caixa = styled.div`
   /* border: solid 2px blue; */
   ${center}
   justify-content: space-between;
   height: 80vh;
   width: 90vw;
   h2{
      /* border: solid 2px blue; */
      font-size: 5rem;
      color: white;
      width: 60vw;
      span{
         color: red;
      }
   }
`