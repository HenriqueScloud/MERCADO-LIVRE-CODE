import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";
import { useContext } from "react";
import { TodoContext } from "../../providers/TodoContext";
export const CartModal = () => {
  const { cartList, setCartList, setOnModal, delItemCardList } =
    useContext(TodoContext);

  const total = cartList.reduce((prevValue, product) => {
    return prevValue + Number(product.price * product.qtd);
  }, 0);

  return (
    <div className={style.cardModal_Container}>
      <section role="dialog" className={style.cardModal}>
        <header className={style.modal_header}>
          <h2 className="font_title_3">Carrinho de compras</h2>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setOnModal(false)}
          >
            <MdClose size={21} />
          </button>
        </header>
        <main className={style.modal_main}>
          <ul>
            {cartList.length == 0 && (
              <div className={style.containerModal}>
                <h1>Você ainda não possui nenhum item no carrinho </h1>
              </div>
            )}
            {cartList.map((Card) => (
              <CartItemCard
                key={Card.id}
                Card={Card}
                delItemCardList={delItemCardList}
              />
            ))}
          </ul>
        </main>
        <footer className={style.modal_footer}>
          <div>
            <span>Total</span>
            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button onClick={() => setCartList([])}>Remover todos</button>
          <button onClick={() => console.table(cartList)
          }>Comprar</button>
        </footer>
      </section>
    </div>
  );
};
