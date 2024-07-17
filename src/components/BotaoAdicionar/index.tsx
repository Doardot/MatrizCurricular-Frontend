"use client"

import React from 'react';
import './index.css';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface BotaoAdicionarProps {
    onButtonClick: () => void;
}

export default function BotaoAdicionar({
    onButtonClick,
}: BotaoAdicionarProps) {
    return (
        <div>
            <div className="botao-customizado" onClick={() => onButtonClick()}>
                <AddRoundedIcon className="mais"></AddRoundedIcon>  
            </div>
        </div>
    );
}