import React from 'react';
import {CustomButtonProps} from './types';
import {useNavigate} from 'react-router-dom';

const CustomButton = ({children, link} :CustomButtonProps) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(link)}>
      {children}
    </button>
  );
};

export {CustomButton};