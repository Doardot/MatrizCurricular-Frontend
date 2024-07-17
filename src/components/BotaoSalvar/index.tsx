"use client"

import React from 'react';
import './index.css';

interface BotaoAdicionarProps {
    onButtonClick: () => void;
}

export default function BotaoAdicionar({
    onButtonClick,
}: BotaoAdicionarProps) {
    return (
        <div>
            <div className="botaoSalvar" onClick={() => onButtonClick()}>
                <p className='salvarTexto'>Salvar</p>
            </div>
        </div>
    );
}