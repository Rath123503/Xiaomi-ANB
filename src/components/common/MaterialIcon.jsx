import React from 'react';

export const MaterialIcon = ({ 
  name, 
  className = '', 
  size = 24, 
  fill = false, 
  weight = 400, 
  grade = 0, 
  opticalSize = 24,
  style = {}
}) => {
  // Build font variation settings for Material Symbols Rounded
  const fontVariationSettings = `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`;
  
  return (
    <span 
      className={`material-symbols-rounded select-none inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings,
        lineHeight: 1,
        ...style
      }}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;
