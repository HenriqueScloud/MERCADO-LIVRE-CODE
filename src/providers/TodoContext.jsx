import { createContext, useState } from "react";

export const TodoContext = createContext({});
export const TodoProvider = ({ children }) => {
  const [Theme, setTheme] = useState(false);
  const [cartList, setCartList] = useState([]);

  const [OnModal, setOnModal] = useState(false);

  const addUmItemCardList = (item) => {
    setCartList(
      cartList.map((i) =>
        i.id === item.id ? { ...item, qtd: item.qtd + 1 } : i
      )
    );
  };

  const addItemCardList = (item) => {
    const existe = cartList.some((i) => i.id === item.id);

    if (existe) {
      setCartList((newCartList) =>
        newCartList.map((i) =>
          i.id === item.id ? { ...i, qtd: i.qtd + 1 } : i
        )
      );
    } else {
      setCartList((newCartList) => [...newCartList, { ...item, qtd: 1 }]);
    }
  };

  const delItemCardList = (item) => {
    const existingItem = cartList.find((i) => i.id === item.id && item.qtd > 1);
    if (existingItem) {
      setCartList((delCartList) =>
        delCartList.map((i) =>
          i.id === item.id ? { ...i, qtd: i.qtd - 1 } : i
        )
      );
    } else {
      const itemDelet = cartList.find((i) => i.id === item.id);
      itemDelet && setCartList(cartList.filter((i) => i.id !== item.id));
    }


  };
  const delTotalItemCardList = (item) => {
    setCartList(cartList.filter((i) => i.id !== item.id));
  }

  return (
    <TodoContext.Provider
      value={{
        Theme,
        setTheme,
        OnModal,
        setOnModal,
        cartList,
        setCartList,
        addItemCardList,
        delItemCardList,
        addUmItemCardList,
        delTotalItemCardList
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
