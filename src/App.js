// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './componants/Home/Home';
import Books from './componants/Books/Books';
import Blog from './componants/Blog/Blog'
import ErrorPage from './componants/ErrorPage/ErrorPage'
import BookDetails from './componants/BookDetails/BookDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/home', element: <Home></Home>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
        },
        { path: '/books', element: <Books></Books> },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/book/:bookId', element: <BookDetails></BookDetails>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.bookId}`)
          }
        }
      ]
    },
    { path: '*', element: <ErrorPage></ErrorPage> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
