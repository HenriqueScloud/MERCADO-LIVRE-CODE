import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { TodoContext } from "../../../providers/TodoContext";
import style from '../BtnCarrinho/style.module.scss'
export const BtnCarrinho = () => {

  const { setOnModal, cartList } = useContext(TodoContext);


  return (
    <button onClick={() => setOnModal(true)} className={style.carrinho_btn}>
      <MdShoppingCart size={21} />
      <span>{cartList.reduce((total, album) => total + album.qtd, 0)}</span>
    </button>
  );
}