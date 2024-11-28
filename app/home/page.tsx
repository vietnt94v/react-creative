'use client';
import React, { useState } from 'react';
import Input from '../components/input/Input';

const Home = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const handleEnter = () => {
    setInputValue('');
  };

  return (
    <>
      <div className='container pt-3'>
        <Input
          value={inputValue}
          onChange={handleChange}
          onEnter={handleEnter}
        />
      </div>
    </>
  );
};

export default Home;
