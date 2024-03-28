import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import banner from "../../assets/banner.png"
import mac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"
import { useState } from "react"

 
export default function Main() {

  const[item, setItem] = useState(mac)

  return (
    <main>
      
      <S.BoxProdutos>

        <S.Caixa>
        <S.Principal>
          <img src={item} alt="" />
         </S.Principal>
         <h2>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h2>
        </S.Caixa>

        <S.Opcao>
          <img onClick={()=>{setItem(mac)}} src={mac} alt="" />
          <img onClick={()=>{setItem(batata)}}src={batata} alt="" />
          <img onClick={()=>{setItem(sorvete)}} src={sorvete} alt="" />
        </S.Opcao>

      </S.BoxProdutos>

        <S.Promocao>
            <h2>Promoção</h2>
            <S.Center>
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
           <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
           <Card imagem={banner} texto={"Confira as medidas que o Méqui adotou!"} />
            </S.Center>
        </S.Promocao>

    </main>
  )
}