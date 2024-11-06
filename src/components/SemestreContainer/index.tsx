"use client"

import React, { useState } from 'react';
import './index.css';
import { DisciplinaCard } from '../DisciplinaCard';
import BotaoSalvar from '../BotaoSalvar';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface SemesterContainerProps {
    disciplinas: {
        semestre: string;
        nome: string;
        codCred: string;
    }[];
}

export const SemesterContainer = ({ disciplinas: disciplinas }: SemesterContainerProps) => {
    return (
        <div>
            <div className='semesterContainer'>
                <SortableContext items={disciplinas.map((disciplina, index) => disciplina.codCred)} strategy={verticalListSortingStrategy}>
                    {disciplinas.map((disciplina) => (
                        <DisciplinaCard
                            key={disciplina.codCred}
                            semestre={disciplina.semestre}
                            nome={disciplina.nome}
                            codCred={disciplina.codCred}
                        />
                    ))}
                </SortableContext>
                
                
            </div>
            <div className='voidBox'>
                <BotaoSalvar onButtonClick={() => { }} />
            </div>
        </div>
    );
}