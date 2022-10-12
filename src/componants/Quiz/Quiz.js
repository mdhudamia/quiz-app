import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    // console.log(quiz)
    return (
        <div className='quiz '>
            <h1 className='text-2xl'>{quiz.question.replace(/(<([^>]+)>)/ig, '')}</h1>
            <div className="options ">
                <p >{quiz.options[0]}</p>
                <p >{quiz.options[1]}</p>
                <p >{quiz.options[2]}</p>
                <p >{quiz.options[3]}</p>
            </div>

        </div>
    );
};

export default Quiz;