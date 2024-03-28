import logo from "../../assets/logo.png"
import aple from "../../assets/AppStore.png"
import play from "../../assets/GooglePlay.png"
import * as S from "./footer_styled"

export default function Footer() {

  return (
    <S.Footer>
      <S.Logo>
        <img src={logo} alt="" />
        <p>© McDonald’s 2024</p>
      </S.Logo>
        <S.Redes>
                <img src={aple} alt="" />
                <img src={play} alt="" />
        </S.Redes>
    </S.Footer>
  )
}