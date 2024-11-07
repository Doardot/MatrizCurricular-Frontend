"use client"

import React from 'react';
import './index.css';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// interface DisciplinaCardProps {
//     disciplina: {
//         semestre: string;
//         nome: string;
//         codCred: string;
//     }
// }

interface DisciplinaCardProps {
    semestre: string;
    nome: string;
    codCred: string;
}

export const DisciplinaCard = ({ semestre, nome, codCred }: DisciplinaCardProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: codCred });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="cardDisciplina"
            data-semester={semestre} draggable>

            <div className="tituloDisciplina">
                <h2 style={{ margin: '0' }}>{nome}</h2>
            </div>
            <p className="descricaoDisciplina">
                Cod: {codCred}
            </p>
        </div>
    );
}