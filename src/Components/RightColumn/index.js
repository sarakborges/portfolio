import React from "react";

import { menu, experiences } from "consts";

import "./style.scss";

const RightColumn = () => {
  return (
    <div id="right-column">
      <div>
        {menu.map((menuItem) => {
          return (
            <div id={menuItem.hash} key={`menu-item-${menuItem.hash}`}>
              <div className="app-title">{menuItem.title}</div>

              <div className="app-text">
                {menuItem.text
                  .split("\n")
                  .map((menuItemText, menuItemTextKey) => {
                    return (
                      <p
                        key={`menu-item-${menuItem.hash}-text-${menuItemTextKey}`}
                        dangerouslySetInnerHTML={{ __html: menuItemText }}
                      />
                    );
                  })}
              </div>

              {menuItem.hash === "professional-experience" &&
                experiences.reverse().map((experienceItem) => {
                  return (
                    <div
                      className="company-item"
                      key={`professional-experiences-${experienceItem.company}`}
                    >
                      <div className="company-name">
                        {experienceItem.company}
                      </div>

                      <div className="company-date">
                        {`${experienceItem.from} - ${experienceItem.to}`}
                      </div>

                      <div className="app-text">
                        {experienceItem.text
                          .split("\n")
                          .map((experienceItemText, experienceItemIndex) => {
                            return (
                              <p
                                key={`professional-experiences-${experienceItem.hash}-text-${experienceItemIndex}`}
                                dangerouslySetInnerHTML={{
                                  __html: experienceItemText,
                                }}
                              />
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}

        <div className="sylvanas">
          <div className="sylvanas-text">
            Um token de apreciação a maravilhosa Dark Lady, eterna rainha dos
            Forsaken, ex Warchief, e que continua no meu coração, mesmo tendo
            dito que a Horda não significa nada pra ela. Sylvanas Windrunner. ♥
          </div>

          <div className="sylvanas-image" />
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
