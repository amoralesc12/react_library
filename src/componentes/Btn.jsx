// Button.js
"use client";
import React from 'react';

const Button = ({ onClick, children }) => (
  <button className="login-button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
