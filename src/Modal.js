import { Component } from 'react';
import { createPortal } from 'react-dom';

const modal = document.getElementById('modal');

class Modal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    modal.appendChild(this.el);
  }

  componentWillUnmount() {
    modal.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;