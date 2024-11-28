import React from 'react';
import IInput from '../../models/Input';

const Input = ({
  value = '',
  placeholder = '',
  onChange,
  onEnter,
  onFocus,
  onBlur,
}: IInput) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };
  return (
    <>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={e => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
