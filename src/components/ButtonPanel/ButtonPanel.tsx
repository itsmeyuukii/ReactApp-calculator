import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';

interface ButtonPanelProps {
  onButtonClick: (value: string) => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonClick }) => {
  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div className="button-panel">
      {buttons.map((btn) => (
        <Button key={btn} value={btn} onClick={onButtonClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;