'use client'

import { ButtonProps } from '@/types/interfaces';
import React from 'react';


const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-2 px-4 rounded text-white ${className}`}
        >
            {text}
        </button>
    );
}

export default Button;