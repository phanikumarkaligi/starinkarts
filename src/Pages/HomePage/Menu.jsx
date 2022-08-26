import React from "react";
import classes from "./Menu.module.css";
function Menu() {
  return (
    <div className={classes.mainContainer}>
      <button>Home</button>
      <button>Shop</button>
      <button>About</button>
    </div>
  );
}

export default Menu;
