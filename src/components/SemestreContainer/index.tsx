"use client"

import React from 'react';
import './index.css';
import DisciplinaCard from '../DisciplinaCard';

interface SemesterContainer {
    disciplinas: any[];
    onSave: () => void;
}

export default function SemesterContainer({
    disciplinas,
    onSave
}: SemesterContainer) {
    return (
        <div>
            <div className='semesterContainer'>
                {disciplinas.map((disciplina, index) => (
                    <DisciplinaCard key={index} disciplina={disciplina} />
                ))}
                <div>
                    {/* Void box for creating new disciplines */}
                    <button onClick={onSave}>Save</button>
                </div>
            </div>
        </div>
    );
}