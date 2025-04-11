import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import "../Menu/index.scss";
import { Link } from "react-router-dom";
export const Menu = () => {
  const { OnMenu, setOnMenu, OnModal, setOnModal,setTheme, Theme } = useContext(TodoContext);
  return (
    <nav className="menu">
      <div onClick={() => setOnMenu(!OnMenu)} />
      <ul className="menu-ul">
        
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/">Contatos</a>
        </li>
        <li onClick={() => setOnModal(!OnModal)}>Carrinho</li>
        <button
          className="header__theme-btn"
          onClick={() => {
            setTheme(!Theme);
          }}
        ></button>

        <Link to={"/about"} >sobre</Link>
      </ul>
    </nav>
  );
};
