import React from 'react';
import styles from './styles.module.sass';

export const Button = ({ children, onClick, width, inverted }) => (
  <button
    className={`${styles.button} ${inverted ? styles.button_inverted : ''}`}
    style={width ? { width: '100%' } : {}}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
