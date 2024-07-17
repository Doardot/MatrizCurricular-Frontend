"use client"

import React from 'react';
import './index.css';

interface DisciplinaCardProps {
    disciplina: {
        semestre: string;
        nome: string;
        codCred: string;
    }
}

export default function DisciplinaCard({
    disciplina: { semestre, nome, codCred }
}: DisciplinaCardProps) {
    return (
        <div className="cardDisciplina" data-semester={semestre}>
            <div className="tituloDisciplina">
                <h2 style={{ margin: '0' }}>{nome}</h2>
            </div>
            <p className="descricaoDisciplina">
                Cod: {codCred}
            </p>
        </div>
    );
}