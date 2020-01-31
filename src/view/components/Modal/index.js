import React from "react";
import "./modal.scss";
import { connect } from "react-redux";
import { hideModal } from "../../../actions/modalActions";

class Modal extends React.Component {
  constructor() {
    super();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.hideModal();
    }
  }

  render() {
    if (!this.props.modal) return null;

    return (
      <div id="modal">
        <div id="modal-content" ref={this.setWrapperRef}>
          <button className="modal-close" onClick={this.props.hideModal}>
            &times;
          </button>
          <p>Connect netlify</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal.mode
});

export default connect(mapStateToProps, { hideModal })(Modal);
