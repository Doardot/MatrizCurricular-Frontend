import Header from '@/components/Header';
import DisciplinaCard from "@/components/DisciplinaCard";
import './styles.css';



import React from 'react';

export default function Disciplinas() {

    const disciplinaExemplo = {
        nome: 'Laboratorio de Redes Computadores',
        codCred: 'MAT101',
        semestre: '2022.1'
    };

    return <>
        <div className="body">
            <Header />
            <div className="page">

                <div className="cardSemester">
                    <DisciplinaCard disciplina={disciplinaExemplo} />
                </div>


            </div>
        </div>

    </>
}