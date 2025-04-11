import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
import { MdShoppingCart } from "react-icons/md";
// import { fetchAlbuns } from "../../dataBase/api";
import "./index.scss";
import { FaBars } from "react-icons/fa";

function Header() {
  const { Theme, setTheme, setOnMenu, OnMenu, setOnModal, cartList } =
    useContext(TodoContext);

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">
          <p className="destacar">Sport</p>
          <p className="destacar">Story</p>
        </h1>
        <ul>
          <button
            onClick={() => setOnModal(true)}
            className="header__carrinho-btn"
          >
            <MdShoppingCart size={21} />
            <span>
              {cartList.reduce((total, album) => total + album.qtd, 0)}
            </span>
          </button>
          
          <button
            className="header__carrinho-btn"
            onClick={() => setOnMenu(!OnMenu)}
          >
            <FaBars />
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
