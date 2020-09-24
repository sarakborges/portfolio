import React from "react";

import "./style.scss";

const Container = ({ children, options }) => {
  let classes = ["container"];

  if (!!options?.classes) {
    classes = classes.concat(options.classes);
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Container;
