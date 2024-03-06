import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

// V komponentě HomePage vytvořte stav menuOpened, který bude obsahovat hodnotu true nebo false podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko .menu__btn.
// Dle hodnoty ve stavu menuOpened správně sestavte třídu pro element .menu. K zavření menu slouží CSS třída menu--closed.
// Chceme, aby komponenta MenuItem přijímala prop s názvem onSelect. Ta bude očekávat callback, který se zavolá, když uživatel vybere danou položku, aby se tak menu zavřelo. Přidejte tedy na prvek <a> posluchač události onClick, který zavolá předaný callback.
// V komponentě HomePage předejte všem instancím komponenty MenuItem skrze prop onSelect funkci handleSelectItem, která nastaví stav menuOpened na false.

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [titlePage, setTitlePage] = useState("Domů")


  const handleSelectItem = (page) => {
    setMenuOpened(false)
    setTitlePage(page)
  }
  
  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu--closed"}>
          <button onClick={() => setMenuOpened(!menuOpened)} className="menu__btn"></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectItem} text="Domů" />
            <MenuItem onSelect={handleSelectItem} text="Naše nabídka" />
            <MenuItem onSelect={handleSelectItem} text="Náš tým" />
            <MenuItem onSelect={handleSelectItem} text="Blog" />
            <MenuItem onSelect={handleSelectItem} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>{titlePage}</h1>
      </main>
    </>
  );
};
