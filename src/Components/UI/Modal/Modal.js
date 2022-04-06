import { Fragment } from "react";
import Button from "../Button/Button";
import Card from "../Cards/Card";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
// Backdrop
function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.toggleModal} />;
}
// Modal Overlay
function ModalOverlay(props) {
  return (
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
  );
}
// React component for reusable modal
function Modal(props) {
  // Render the modal
  return (
    <Fragment>
      {createPortal(
        <Backdrop {...props} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay {...props} />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
}

export default Modal;
