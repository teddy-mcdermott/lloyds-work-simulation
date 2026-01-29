import React from 'react';

export default function SubmitButton({ children }) {
  return (
    <button type="submit" className="SubmitButton">
      {children}
    </button>
  );
}