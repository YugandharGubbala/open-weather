import React from 'react';

const ToggleButton = ({ onToggle, isDarkMode }) => {
  return (
    <button onClick={onToggle}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ToggleButton;
