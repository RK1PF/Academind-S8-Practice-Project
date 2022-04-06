// React component card to wrap the AddUser component
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>
      {props.title && (
        <div className={styles["card-header"]}>
          <h2>{props.title}</h2>
        </div>
      )}
      {props.customContentCSS || (
        <div className={styles["card-body"]}>{props.children}</div>
      )}
      {props.customContentCSS || (
        <div className={styles["card-footer"]}>
          {props.footer || "Practice on React by RK1PF 🔥"}
        </div>
      )}
      {props.customContentCSS && props.children}
    </div>
  );
}

export default Card;
