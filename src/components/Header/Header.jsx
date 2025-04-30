import "./index.scss";
import { BtnCarrinho } from "../Buttons/BtnCarrinho/BtnCarrinho";
import { BtnTheme } from "../Buttons/BtnTheme/BtnTheme";
import { BtnMenu } from "../Buttons/BtnMenu/BtnMenu";

function Header() {
  let Janela = window.innerWidth;
  console.log(Janela);

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">
          <p className="destacar">Sport</p>
          <p className="destacar">Story</p>
        </h1>
        <ul>
          {Janela > 425 ? <BtnTheme /> : null}
          {Janela > 425 ? <BtnCarrinho /> : null}

          <BtnMenu />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
