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

    // TODO: ajustar a resolução da tela, abrir um bugfix para isso

    const [disciplinas, setDisciplinas] = useState([
        { codCred: 'MAT101', nome: 'Laboratorio de Redes Computadores', semestre: '2022.1' },
        { codCred: 'MAT102', nome: 'Laboratorio de Testes', semestre: '2022.1' },
        { codCred: 'MAT103', nome: 'Experiência do Usuário', semestre: '2022.1' },
        { codCred: 'MAT104', nome: 'Queimada', semestre: '2022.1' },
        { codCred: 'MAT144', nome: 'Queimada', semestre: '2022.1' },
        { codCred: 'MAT04', nome: 'Queimada', semestre: '2022.1' },
    ]);

    const [disciplinas2, setDisciplinas2] = useState([
        { codCred: 'MAT105', nome: 'Algoritmo e Estrutura de Dados I', semestre: '2022.2' },
        { codCred: 'MAT106', nome: 'Experiência do Usuário', semestre: '2022.2' },
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
                        {/* <SemesterContainer disciplinas={disciplinas2} /> */}
                    </DndContext>
                    
                </div>
                {/* TODO: FIX no css aqui também */}
                <div className='botaoAdicionar'>
                    <BotaoAdicionar onButtonClick={() => { }} />
                </div>
            </div>
        </div >
    </>
}