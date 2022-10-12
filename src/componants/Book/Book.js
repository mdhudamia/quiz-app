import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { id, name, logo, total } = book;

    return (
        <div className='single-book'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <p>{total}</p>
            <Link to={`/book/${id}`}><button>Viwe Details</button></Link>
        </div>
    );
};

export default Book;