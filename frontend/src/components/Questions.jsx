import React from 'react';
import { useParams } from 'react-router-dom';

function Questions() {
    const { topic } = useParams();

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <h1>Questions for Topic ID: {topic}</h1>
        </div>
    );
}

export default Questions;
