import React, { useState } from 'react';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplayValue('0');
    } else if (value === '=') {
      try {
        setDisplayValue(eval(displayValue)); // Note: Avoid using eval in production.
      } catch {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;