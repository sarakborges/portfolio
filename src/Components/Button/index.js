import React from "react";

import "./style.scss";

const Button = ({ children, options }) => {
  let classes = ["button"];

  if (!!options?.classes) {
    classes = classes.concat(options?.classes);
  }

  return (
    <button
      type={options?.type || "button"}
      className={classes.join(" ")}
      onClick={options?.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
