"use client"

import Header from '@/components/Header';
import './styles.css';
import React from 'react';
import SemesterContainer from '@/components/SemestreContainer';
import BotaoAdicionar from '@/components/BotaoAdicionar';

export default function Disciplinas() {

    const disciplinaExemplo = {
        nome: 'Laboratorio de Redes Computadores',
        codCred: 'MAT101',
        semestre: '2022.1'
    };
    const disciplinaExemplo2 = {
        nome: 'Laboratorio de Redes Computadores',
        codCred: 'MAT101',
        semestre: '2022.1'
    };

    return <>
        <div className="body">
            <Header />
            <div className="page">
                <div className="cardSemester">
                    <SemesterContainer disciplinas={[disciplinaExemplo, disciplinaExemplo2]} onSave={() => { }} />
                    <SemesterContainer disciplinas={[disciplinaExemplo, disciplinaExemplo2]} onSave={() => { }} />
                    <BotaoAdicionar onButtonClick={() => { }} />
                </div>
            </div>
        </div>

    </>
}