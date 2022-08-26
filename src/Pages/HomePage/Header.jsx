import React from "react";
import { ShoppingCartRounded } from "@mui/icons-material";
import classes from "./Header.module.css";
function Header() {
  // event handlers
  function signupBtnHandler(event) {
    alert("Login Handler");
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.searchbarContainer}>
        <h3>search</h3>
        <input type="text" placeholder="search" />
      </div>
      <div className={classes.loginContainer}>
        <button onClick={signupBtnHandler}>Login</button>
        <button onClick={signupBtnHandler}>signup</button>
        <button onClick={signupBtnHandler}>
          <ShoppingCartRounded />
        </button>
      </div>
    </div>
  );
}

export default Header;
