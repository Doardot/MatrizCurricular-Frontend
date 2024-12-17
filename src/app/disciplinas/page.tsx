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
        { codCred: 'MAT144', nome: 'Inteligencia Artificial', semestre: '2022.1' },
        { codCred: 'MAT04', nome: 'Machine Learning', semestre: '2022.1' },
    ]);

    const [disciplinas2, setDisciplinas2] = useState([
        { codCred: 'MAT105', nome: 'Algoritmo e Estrutura de Dados I', semestre: '2022.2' },
        { codCred: 'MAT106', nome: 'Projeto e Otimização', semestre: '2022.2' },
        { codCred: 'MAT107', nome: 'Experiência do Usuário', semestre: '2022.2' },
    ]);

    const [disciplinas3, setDisciplinas3] = useState([
        { codCred: 'MAT108', nome: 'Games', semestre: '2022.2' },
        { codCred: 'MAT109', nome: 'Segurança', semestre: '2022.2' },
        { codCred: 'MAT111', nome: 'FPPD', semestre: '2022.2' },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const getDisciplinasPos = (codCred: string) => disciplinas.findIndex((disciplina) => disciplina.codCred === codCred);
    const getDisciplinasPos2 = (codCred: string) => disciplinas2.findIndex((disciplina) => disciplina.codCred === codCred);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

    if (!over || active.id === over.id) return;

    const activeIndex1 = getDisciplinasPos(active.id);
    const activeIndex2 = getDisciplinasPos2(active.id);

    const overIndex1 = getDisciplinasPos(over.id);
    const overIndex2 = getDisciplinasPos2(over.id);

    // Moving within the same list
    if (activeIndex1 !== -1 && overIndex1 !== -1) {
        setDisciplinas((disciplinas) => arrayMove(disciplinas, activeIndex1, overIndex1));
    } else if (activeIndex2 !== -1 && overIndex2 !== -1) {
        setDisciplinas2((disciplinas2) => arrayMove(disciplinas2, activeIndex2, overIndex2));
    }
    };

    const handleDragOver = (event: any) => {
        const { active, over } = event;
    
        if (!over || active.id === over.id) return;
    
        const activeIndex1 = getDisciplinasPos(active.id);
        const activeIndex2 = getDisciplinasPos2(active.id);
    
        const overIndex1 = getDisciplinasPos(over.id);
        const overIndex2 = getDisciplinasPos2(over.id);
    
        // Cross-list movement
        if (activeIndex1 !== -1 && overIndex2 !== -1) {
            const itemToMove = disciplinas[activeIndex1];
            setDisciplinas((prev) => prev.filter((_, i) => i !== activeIndex1));
            setDisciplinas2((prev) => [...prev, itemToMove]);
        } else if (activeIndex2 !== -1 && overIndex1 !== -1) {
            const itemToMove = disciplinas2[activeIndex2];
            setDisciplinas2((prev) => prev.filter((_, i) => i !== activeIndex2));
            setDisciplinas((prev) => [...prev, itemToMove]);
        }
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
                        onDragOver={handleDragOver}
                    >
                        <SemesterContainer disciplinas={disciplinas} />
                        {/* TODO: FIX no css da caixa, está colidindo os semestres */}
                        <SemesterContainer disciplinas={disciplinas2} /> 
                        {/* <SemesterContainer disciplinas={disciplinas3} />  */}

                    </DndContext>
                    <div className='botaoAdicionar'>
                    <BotaoAdicionar onButtonClick={() => { }} />
                </div>
                </div>
                {/* TODO: FIX no css aqui também */}
                
            </div>
        </div >
    </>
}