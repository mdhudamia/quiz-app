import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const BookDetails = () => {
    const book = useLoaderData();
    const quizs = book.data.questions;
    console.log(quizs)
    return (
        <div className='quiz-area'>
            <div className="quiz-list">
                {quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
            </div>
        </div>
    );
};

export default BookDetails;