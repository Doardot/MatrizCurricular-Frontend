"use client"

import Header from '@/components/Header';
import './styles.css';
import React, { useState } from 'react';
import SemesterContainer from '@/components/SemestreContainer';
import BotaoAdicionar from '@/components/BotaoAdicionar';
import { closestCorners, DndContext } from '@dnd-kit/core';

export default function Disciplinas() {

    const [disciplinasExemplo, setDisciplinasExemplo] = useState([
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
                    <DndContext collisionDetection={closestCorners}>
                        <SemesterContainer disciplinas={disciplinasExemplo} onSave={() => { }} />
                        {/* TODO: FIX no css da caixa, está colidindo os semestres */}
                        <SemesterContainer disciplinas={disciplinasExemplo} onSave={() => { }} />
                        <BotaoAdicionar onButtonClick={() => { }} />
                    </DndContext>
                </div>
            </div>
        </div >

    </>
}