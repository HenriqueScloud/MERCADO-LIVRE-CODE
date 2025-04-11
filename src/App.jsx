import "./styles/index.scss";

// import { HomePage } from "./routers/HomePage";
import Header from "./components/Header/Header";
import { TodoContext } from "./providers/TodoContext";
import { useContext } from "react";
import { CartModal } from "./components/CartModal";
import { HomePages } from "./routers/HomePage";
import { Menu } from "./components/Menu/Menu";

function App() {
const { Theme,OnModal,OnMenu } = useContext(TodoContext);
const html = document.querySelector("html");

Theme == false
  ? html.classList.add("darkMode")
  : html.classList.remove("darkMode");

return (
  <main className="darkMode">
    {OnModal && <CartModal />}
    { OnMenu && <Menu/>}
    <Header />
    <HomePages />
    <footer>
      <h1>footer a ser desenvolvido !!</h1>
    </footer>
  </main>
);
}

export default App;




