import React from 'react';

// Component Label
const Label = ({ label, type }) => {
  const getLabelStyles = () => {
    switch (type) {
      case 'title':
        return 'text-2xl font-semibold text-gray-900'; 
      case 'sub-title':
        return 'text-xl font-medium text-gray-700';
      case 'sub-title-link':
        return 'text-xl font-medium text-blue-600 hover:underline'; 
      default:
        return 'text-lg text-gray-800'; 
    }
  };

  return (
    <label className={`block ${getLabelStyles()}`}>
      {label}
    </label>
  );
};

export default Label;