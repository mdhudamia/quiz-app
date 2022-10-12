import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Home = () => {
    const books = useLoaderData();

    return (
        <div className='books'>
            {books.data.map(book => <Book key={book.id} book={book}></Book>)}
        </div>
    );
};

export default Home;