// React component for Buttons
import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={
        props.disabled ? styles.disabled : `${styles.button} ${props.className}`
      }
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
