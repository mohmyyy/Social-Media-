import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import "./Portals.scss";

// const BackDrop = ({ backdrop }) => {
//   return <div className="backdrop" onClick={backdrop}></div>;
// };

const ModalOverlay = (props) => {
  return (
    // <div >
      <div>{props.children}</div>
    // </div>
  );
};

const Portals = (props) => {
  const portalElement = document.getElementById("portal-root");
  return (
    <Fragment>
      {/* {createPortal(<BackDrop backdrop={backdrop} />, portalElement)} */}
      {createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Portals;
