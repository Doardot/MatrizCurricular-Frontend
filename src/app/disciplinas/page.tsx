"use client"

import Header from '@/components/Header';
import './styles.css';
import React, { useState } from 'react';
import { SemesterContainer } from '@/components/SemestreContainer';
import BotaoAdicionar from '@/components/BotaoAdicionar';
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function Disciplinas() {

    const [disciplinas, setDisciplinas] = useState([
        { codCred: 'MAT101', nome: 'Laboratorio de Redes Computadores', semestre: '2022.1' },
        { codCred: 'MAT102', nome: 'Laboratorio de Testes', semestre: '2022.1' },
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

        console.log('Drag End Event:', event);
        console.log('Active:', active);
        console.log('Over:', over);

        if (!over || active.id === over.id) return;

        setDisciplinas(disciplinas => {
            const originalPos = getDisciplinasPos(active.id);
            const newPos = getDisciplinasPos(over.id);

            console.log('Original Position:', originalPos);
            console.log('New Position:', newPos);

            return arrayMove(disciplinas, originalPos, newPos);
        });
    };

    return <>
        <div className="body">
            <Header />
            <div className="page">
                <div className="cardSemester">
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragEnd={handleDragEnd}
                    >
                        <SemesterContainer disciplinas={disciplinas} />
                        {/* TODO: FIX no css da caixa, está colidindo os semestres */}
                        {/* <SemesterContainer disciplinas={disciplinasExemplo} onSave={() => { }} /> */}
                    </DndContext>
                    {/* <BotaoAdicionar onButtonClick={() => { }} /> */}
                </div>
            </div>
        </div >
    </>
}