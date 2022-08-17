import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function AppHeader() {
  return (
    <header className="header page__section pt-4 pb-4">
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <BurgerIcon type="primary" />
            <p className="nav__item-text nav__item-text_active">Конструктор</p>
          </li>
          <li className="nav__item nav__item_list">
            <ListIcon type="secondary" />
            <p className="nav__item-text">Лента заказов</p>
          </li>
          <li className="nav__item">
            <Logo />
          </li>
          <li className="nav__item nav__item_profile">
            <ProfileIcon type="secondary    " />
            <p className="nav__item-text">Личный кабинет</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
