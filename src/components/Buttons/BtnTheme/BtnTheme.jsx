import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext";
import style from '../BtnTheme/style.module.scss'
export const BtnTheme = () => {
  const { setTheme, Theme } = useContext(TodoContext);
  return (
    <button
      className={Theme ? style.theme_btn : style.theme_btn_dark }
      onClick={() => {
        setTheme(!Theme);
      }}
    ></button>
  );
}