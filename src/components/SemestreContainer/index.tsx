"use client"

import React, { useState } from 'react';
import './index.css';
import { DisciplinaCard } from '../DisciplinaCard';
import BotaoSalvar from '../BotaoSalvar';
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCorners,
} from "@dnd-kit/core";

import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface SemesterContainerProps {
    disciplinas: {
        semestre: string;
        nome: string;
        codCred: string;
    }[];
}

export const SemesterContainer = ({ }: SemesterContainerProps) => {

    const [disciplinas, setDisciplinas] = useState([
        { codCred: 'MAT101', nome: 'Laboratorio de Redes Computadores', semestre: '2022.1' },
        { codCred: 'MAT102', nome: 'Laboratorio de Testes', semestre: '2022.1' },
        { codCred: 'MAT103', nome: 'Experiência do Usuário', semestre: '2022.1' },
        { codCred: 'MAT104', nome: 'Queimada', semestre: '2022.1' },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const getDisciplinasPos = (codCred: string) => disciplinas.findIndex((disciplina) => disciplina.codCred === codCred);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        setDisciplinas(disciplinas => {
            const originalPos = getDisciplinasPos(active.id);
            const newPos = getDisciplinasPos(over.id);

            return arrayMove(disciplinas, originalPos, newPos);
        });
    };

    return (
        <div className='semesterContainer'>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}
            >
                <div className='cardMapContainer'>
                    <SortableContext items={disciplinas.map((disciplina, index) => disciplina.codCred)}
                        strategy={verticalListSortingStrategy}>
                        {disciplinas.map((disciplina) => (
                            <div className="cardContainer">
                            <DisciplinaCard
                                key={disciplina.codCred}
                                semestre={disciplina.semestre}
                                nome={disciplina.nome}
                                codCred={disciplina.codCred}
                            />
                            </div>
                        ))}
                    </SortableContext>
                </div>
            </DndContext >
            <div className='voidBox'>
                <BotaoSalvar onButtonClick={() => { }} />
            </div>
        </div>
    );
}