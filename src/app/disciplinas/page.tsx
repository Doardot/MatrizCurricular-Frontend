"use client"

import Header from '@/components/Header';
import './styles.css';
import React, { useState } from 'react';
import { SemesterContainer } from '@/components/SemestreContainer';
import BotaoAdicionar from '@/components/BotaoAdicionar';
import { closestCorners, DndContext } from '@dnd-kit/core';
import {
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function Disciplinas() {

    const [disciplina, setDisciplina] = useState([
        {
            nome: 'Laboratorio de Redes Computadores',
            codCred: 'MAT101',
            semestre: '2022.1'
        },
        {
            nome: 'Laboratorio de Testes',
            codCred: 'MAT102',
            semestre: '2022.1'
        }
    ]);

    return <>
        <div className="body">
            <Header />
            <div className="page">
                <div className="cardSemester">
                    <DndContext
                        collisionDetection={closestCorners}

                    >
                        <SemesterContainer disciplinas={disciplina} />
                        {/* TODO: FIX no css da caixa, está colidindo os semestres */}
                        {/* <SemesterContainer disciplinas={disciplinasExemplo} onSave={() => { }} /> */}
                    </DndContext>
                    {/* <BotaoAdicionar onButtonClick={() => { }} /> */}
                </div>
            </div>
        </div >
    </>
}