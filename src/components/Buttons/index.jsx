import React from "react";

const Button = ({
  id,
  type,
  className,
  content,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      id={id}
      className={className}
      type={type}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </button>
  );
};

export default Button;
