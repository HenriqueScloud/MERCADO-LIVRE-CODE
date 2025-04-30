import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import "../Menu/index.scss";
import { Link } from "react-router-dom";
import { BtnCarrinho } from "../Buttons/BtnCarrinho/BtnCarrinho";
import { BtnTheme } from "../Buttons/BtnTheme/BtnTheme";
export const Menu = () => {
  const { OnMenu, setOnMenu } = useContext(TodoContext);
  return (
    <nav className="menu">
      <div onClick={() => setOnMenu(!OnMenu)} />
      <ul className="menu-ul">
        <li>
          <a href="/">loja</a>
        </li>
        <li>
          <a href="/contats">Contatos</a>
        </li>
        <Link to={"/about"}>sobre</Link>

        <BtnCarrinho />
        <BtnTheme />
      </ul>
    </nav>
  );
};
