"use client"

import Header from '@/components/Header';
import './styles.css';
import React from 'react';
import { SemesterContainer } from '@/components/SemestreContainer';
import BotaoAdicionar from '@/components/BotaoAdicionar';

export default function Disciplinas() {
    return <>
        <div className="body">
            <Header />
            <div className="page">
                <div className="containerMatriz">
                    <SemesterContainer disciplinas={[]} />
                    <SemesterContainer disciplinas={[]} />
                    <SemesterContainer disciplinas={[]} />
                    <SemesterContainer disciplinas={[]} />
                    <SemesterContainer disciplinas={[]} />
                    <SemesterContainer disciplinas={[]} />

                    <BotaoAdicionar onButtonClick={() => { }} />
                </div>
            </div>
        </div >
    </>
}