import React from 'react';

export default function Tooltip({ text, children }) {
  return (
    <span className="Tooltip" data-tooltip={text}>
      {children}
    </span>
  );
}