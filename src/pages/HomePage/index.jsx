import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <header>
        <div className="menu">
          <button className="menu__btn"></button>
          <div className="menu__items">
            <MenuItem text="Domů" />
            <MenuItem text="Naše nabídka" />
            <MenuItem text="Náš tým" />
            <MenuItem text="Blog" />
            <MenuItem text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
