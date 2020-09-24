import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { menu, headerHeight } from "consts";

import Container from "Components/Container";
import FloatingMenu from "Components/FloatingMenu";

import "./style.scss";
import Button from "Components/Button";

const MiniHeader = () => {
  const [activeMenu, setActiveMenu] = useState(menu[0].hash);
  const [showName, setShowName] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const y = window.pageYOffset;

      if (y >= headerHeight) {
        setShowName(() => true);
      } else {
        setShowName(() => false);
      }

      menu.forEach((menuItem) => {
        const el = document.querySelector(`#${menuItem.hash}`);

        if (y >= el.offsetTop - 70) {
          setActiveMenu(menuItem.hash);
        }
      });
    };
  }, []);

  return (
    <>
      <div id="mini-header">
        <Container options={{ classes: ["header-inner"] }}>
          <div
            className={["header-title", !showName ? "hide-title" : ""].join(
              " "
            )}
          >
            <div className="header-avatar" />

            <div className="header-text">Sara Borges</div>
          </div>

          <div className="menu-list">
            {menu.map((menuItem) => {
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
                      const el = document.querySelector(`#${menuItem.hash}`);

                      window.scrollTo({
                        top: el.offsetTop - 70,
                        behavior: "smooth",
                      });
                    }}
                  >
                    {menuItem.title}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="menu-toggle">
            <Button
              options={{
                classes: ["menu-toggle-button"],
                onClick: () => setIsMenuVisible(() => !isMenuVisible),
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </Container>
      </div>

      <FloatingMenu
        menu={menu}
        isMenuVisible={isMenuVisible}
        activeMenu={activeMenu}
        setIsMenuVisible={setIsMenuVisible}
      />
    </>
  );
};

export default MiniHeader;
