import Button from "../Button/Button";
import Card from "../Cards/Card";
import styles from "./Modal.module.css";

// React component for reusable modal
function Modal(props) {
  // Render the modal
  return (
    <div>
      <div className={styles.backdrop} onClick={props.toggleModal} />
      <Card className={styles.modal} customContentCSS={props.customContentCSS}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
          {props.children}
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.toggleModal}>{props.buttonLabel}</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Modal;
