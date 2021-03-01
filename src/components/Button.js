import React from 'react';
import './Button.css';

export const Button = ({
  onClick,
  text
}) => {

  return (
      <button
        className={`btn`}
        onClick={onClick}
      ><p>{text}</p>
      </button>
  );
};