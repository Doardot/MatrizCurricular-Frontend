import React from 'react';
import DisciplinaCard from '../DisciplinaCard';

interface DisciplinaListProps {
    disciplinas: any[];
    onSave: () => void;
}

export default function DisciplinaList({
    disciplinas,
    onSave
}: DisciplinaListProps) {
    return (
        <div>
            {disciplinas.map((disciplina, index) => (
                <DisciplinaCard key={index} disciplina={disciplina} />
            ))}
            <div>
                {/* Void box for creating new disciplines */}
                <button onClick={onSave}>Save</button>
            </div>
        </div>
    );
}