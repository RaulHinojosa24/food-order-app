import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.onClose();
      }}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`${classes.modal} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const rootElement = document.querySelector("#overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        rootElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay className={props.className ? props.className : ""}>
          {props.children}
        </ModalOverlay>,
        rootElement
      )}
    </Fragment>
  );
};

export default Modal;
