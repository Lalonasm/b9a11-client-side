import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import AddBook from "../pages/AddBooks";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/addBook',
                element: <AddBook></AddBook>
            },
            {
                path: '/book/:id',
                element: <BookDetails></BookDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`)
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>
            },
            {
                path:'/borrowedBooks',
                element:<BorrowedBooks></BorrowedBooks>
            }
        ]
    }
])
export default router;