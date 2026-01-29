import React from 'react';

export default function FormField({ label, children }) {
  return (
    <div className="FormControl">
      <label className="FormLabel">{label}</label>
      {children}
    </div>
  );
}