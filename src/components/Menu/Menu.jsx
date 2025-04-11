import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import "../Menu/index.scss";
export const Menu = () => {
  const { OnMenu, setOnMenu, OnModal, setOnModal } = useContext(TodoContext);
  return (
    <nav className="menu">
      <button onClick={() => setOnMenu(!OnMenu)}>x</button>
      <ul>
        <li>
          <a href="/">loja</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/contats">Contatos</a>
        </li>
        <li onClick={()=>setOnModal(!OnModal)}>
          carrinho
        </li>
      </ul>
    </nav>
  );
};
