import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contacts, skills, languages } from "consts";

import "./style.scss";

const LeftColumn = () => {
  return (
    <div id="left-column">
      <div className="app-title">Contato</div>

      <div className="app-text contact-list">
        {contacts.map((contactItem) => {
          return (
            <p className="contact-item" key={`contact-${contactItem.id}`}>
              <span className="contact-icon">
                <FontAwesomeIcon icon={contactItem.icon} />
              </span>

              <span className="contact-text">{contactItem.text}</span>

              {!!contactItem?.link && (
                <a
                  href={contactItem.link}
                  className="contact-link-icon"
                  target="_new"
                >
                  <FontAwesomeIcon icon={contactItem.linkIcon} />
                </a>
              )}
            </p>
          );
        })}
      </div>

      <div className="app-title">Skills técnicas</div>

      <div className="app-text">
        {skills.map((skillItem) => {
          return <p key={`skills-${skillItem}`}>{skillItem}</p>;
        })}
      </div>

      <div className="app-title">Idiomas</div>

      <div className="app-text">
        {languages.map((languageItem) => {
          return (
            <p key={`languages-${languageItem.language}`}>
              <b>{languageItem.language.toUpperCase()}: </b>
              {languageItem.level.toUpperCase()}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LeftColumn;
