import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/style.module.scss";
import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext";

// eslint-disable-next-line react/prop-types
export const CartItemCard = ({ Card }) => {
  const { delItemCardList, delTotalItemCardList, addUmItemCardList } =
    useContext(TodoContext);


  return (
    <li className={style.CartItemCard}>
      <div>
        <img src={Card.img} alt={Card.title} />
      </div>
      <main>
        <h3 className="font_title_3">{Card.title}</h3>
        <span className="font_body">
          {Card.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </main>
      <aside className="unico">
        <button onClick={() => delItemCardList(Card)}> - </button>
        <p> {Card.qtd} </p>
        <button onClick={() => addUmItemCardList(Card)}> + </button>
      </aside>

      <button
        className="qtd"
        aria-label="delete"
        title="Remover item"
        onClick={() => delTotalItemCardList(Card)}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
