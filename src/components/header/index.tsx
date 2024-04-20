import Image from "next/image";
import { ButtonMenu } from "../button-menu";
import logoImg from '../../assets/logo.svg';
import { HeaderContainer } from "./styles";

interface HeaderProps {
  showMenu?: boolean;
}

export function Header({ showMenu = false }: HeaderProps) {
  return (
    <HeaderContainer className={!showMenu ? "center-menu" : ""}>
      <Image src={logoImg} alt="" />
      {showMenu && <ButtonMenu />}
    </HeaderContainer>
  );
}
