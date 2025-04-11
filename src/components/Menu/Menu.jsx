import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import "../Menu/index.scss";
export const Menu = () => {
  const { OnMenu, setOnMenu, OnModal, setOnModal } = useContext(TodoContext);
  return (
    <nav className="menu">
      <div onClick={() => setOnMenu(!OnMenu)}/>
      <ul className="menu-ul">
        <li>
          <a href="/">Loja</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/contats">Contatos</a>
        </li>
        <li onClick={()=>setOnModal(!OnModal)}>
          Carrinho
        </li>
      </ul>
    </nav>
  );
};
