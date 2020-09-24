import React from "react";

import { menu } from "consts";

import "./style.scss";

const FloatingMenu = ({ isMenuVisible, activeMenu, setIsMenuVisible }) => {
  const scrollToItem = (item) => {
    let hash;

    if (!!item) {
      hash = item.hash;
    } else {
      hash = "left-column";
    }

    const el = document.querySelector(`#${hash}`);

    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth",
    });

    setIsMenuVisible(() => false);
  };

  const floatingMenu = [
    ...menu,

    {
      hash: "left-column",
      title: "Contato",
    },
  ];

  return (
    <div id="floating-menu" className={isMenuVisible ? "show-menu" : ""}>
      <div className="menu-list">
        {floatingMenu.map((menuItem) => {
          return (
            <div
              className={[
                "menu-item",
                activeMenu === menuItem.hash ? "active" : "",
              ].join(" ")}
              key={`floating-menu-item-${menuItem.hash}`}
            >
              <div
                className="clickable"
                key={`menu-${menuItem.hash}`}
                onClick={() => {
                  scrollToItem(menuItem);
                }}
              >
                {menuItem.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingMenu;
