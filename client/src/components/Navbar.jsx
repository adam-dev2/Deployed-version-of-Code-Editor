import React from 'react';

const Navbar = ({ onLanguageChange, onThemeChange }) => {
  return (
    <div className="navbar">
      <select onChange={(e) => onLanguageChange(e.target.value)}>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
        <option value="javascript">Javascript</option>
      </select>
      <select onChange={(e) => onThemeChange(e.target.value)}>
        <option value="vs-dark">VS Dark</option>
        <option value="vs-light">VS Light</option>
      </select>
    </div>
  );
};

export default Navbar;
