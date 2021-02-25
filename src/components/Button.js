import React from 'react';
import './Button.css';

export const Button = ({
  onClick,
  text
}) => {

  return (
      <button
        className={`btn btn--outline`}
        onClick={onClick}
      >{text}
      </button>
  );
};