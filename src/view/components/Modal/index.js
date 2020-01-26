import React from "react";
import "./modal.scss";

export default class Modal extends React.Component {
  render() {
    return (
      <div id="modal">
        <div id="modal-content">
          <button class="modal-close">&times;</button>
        </div>
      </div>
    );
  }
}
