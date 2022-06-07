import React, { Component } from 'react';

import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  handleBackdrope = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdrope}>
        <div className={styles.Modal}> {this.props.children}</div>
      </div>
    );
  }
}
