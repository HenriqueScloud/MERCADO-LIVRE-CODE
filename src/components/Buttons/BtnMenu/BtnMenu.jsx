import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext";
import { FaBars } from "react-icons/fa";
import style from '../BtnMenu/style.module.scss'
export const BtnMenu = () => {
  const {setOnMenu, OnMenu} = useContext(TodoContext)
  return (
    <button className={style.menu_btn} onClick={() => setOnMenu(!OnMenu)}>
      <FaBars />
    </button>
  );
}