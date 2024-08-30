// import { useContext } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const BookDetails = () => {

//     const { user } = useContext(AuthContext)
//     const book = useLoaderData();
//     const { _id, book_title, author_name, authur_email, deadline, category, Rating, description, price } = book || {}


//     const handleForm = async (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const bookId = _id;
//         const email = user?.email;
//         const author_email = authur_email;



//         const borrowData = {
//             bookId,
//             price, deadline,
//             book_title,
//             category,
//             author_email,
//             email
//         }
//         console.table(borrowData);
//     }

//     return (
//         <Link to={`/book/${_id}`} className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
//             {/* Job Details */}
//             <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
//                 <div className='flex items-center justify-between'>
//                     <span className='text-sm font-bold text-gray-800 '>
//                         Borrowed Date: {new Date(deadline).toLocaleDateString()}

//                     </span>
//                     <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
//                         {category}
//                     </span>
//                 </div>

//                 <div>
//                     <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
//                         {book_title}
//                     </h1>

//                     <p className='mt-2 text-lg text-gray-600 '>
//                         {description}
//                     </p>
//                     <p className='mt-6 text-sm font-bold text-gray-600 '>
//                         Buyer Details:
//                     </p>
//                     <div className='flex items-center gap-5'>
//                         <div>
//                             <p className='mt-2 text-sm  text-gray-600 '>Name: Jhankar Vai.</p>
//                             <p className='mt-2 text-sm  text-gray-600 '>
//                                 Email: jhankar@mahbub.com
//                             </p>
//                         </div>
//                         <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
//                             <img src='' alt='' />
//                         </div>
//                     </div>
//                     <p className='mt-6 text-lg font-bold text-gray-600 '>
//                         Ratings: {Rating}
//                     </p>
//                 </div>
//             </div>
//             {/* Place A Bid Form */}
//             <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
//                 <h2 className='text-lg font-semibold text-gray-700 capitalize '>
//                     Borrowing a Book
//                 </h2>

//                 <form onSubmit={handleForm}>
//                     <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1'>


//                         <div>
//                             <label className='text-gray-700 ' htmlFor='emailAddress'>
//                                 Email Address
//                             </label>
//                             <input
//                                 id='emailAddress'
//                                 type='email'
//                                 name='email'
//                                 disabled
//                                 defaultValue={user?.email}
//                                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             />
//                         </div>


//                         <div className='flex flex-col gap-2 '>
//                             <label className='text-gray-700'>Return Date</label>

//                             {/* Date Picker Input Field */}
//                         </div>
//                         <div>
//                             <label className='text-gray-700 ' htmlFor='comment'>
//                                 Comment
//                             </label>
//                             <input
//                                 id='comment'
//                                 name='comment'
//                                 type='text'
//                                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             />
//                         </div>
//                     </div>

//                     <div className='flex justify-end mt-6'>
//                         <button
//                             type='submit'
//                             className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
//                         >
//                             Borrow
//                         </button>
//                     </div>
//                 </form>
//             </section>
//         </Link>
//     )
// }

// export default BookDetails


import { useContext, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import  toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const BookDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const book = useLoaderData()
    const { _id, book_title, category, author_name, author_email, book_image, quantity, description, deadline } = book || {};


    const handleFormSubmission = async (e) => {
        e.preventDefault();

        // if (user?.email === buyer?.email) return toast.error('Action not permitted.')
        const form = e.target;
        const bookId = _id;
        const quantity = parseInt(form.quantity.value);
        if (quantity < parseInt(1)) return  Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Confirm number more than 0",
            showConfirmButton: false,
            timer: 1500
        });
        const comment = form.comment.value;
        const deadline = startDate;
        const email = user?.email;
        // const buyer_email = buyer_email;
        const status = 'Pending';



        const borrowData = {
            bookId,
            quantity,
            deadline,
            comment,
            book_title,
            category,
            email,
            author_name,
            author_email,
            status,
            // buyer_email: buyer?.email,
            // buyer
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/borrow`, borrowData);
            console.log(data);
        }
        catch (err) {
            console.log(err);
            console.log('Hi , I am error', err.message)
        }
        // console.table(borrowData);
    }


    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            {/* Job Details */}
            <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-800 '>
                        Deadline:{new Date(deadline).toLocaleDateString()}
                    </span>
                    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                        {book_title}
                    </span>
                </div>

                <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        {author_name}
                    </h1>

                    <p className='mt-2 text-lg text-gray-600 '>
                        {description}
                    </p>
                    <p className='mt-6 text-sm font-bold text-gray-600 '>
                        Borrower Details:
                    </p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <p className='mt-2 text-sm  text-gray-600 '>Name: {author_name}</p>
                            <p className='mt-2 text-sm  text-gray-600 '>
                                Email: {author_email}
                            </p>
                        </div>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                            <img src={book_image} alt='' />
                        </div>
                    </div>
                    {/* <p className='mt-6 text-lg font-bold text-gray-600 '>
                        Range: ${min_price} - ${max_price}
                    </p> */}
                </div>
            </div>
            {/* Place A Bid Form */}
            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Place A Bid
                </h2>

                <form onSubmit={handleFormSubmission}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Quantity
                            </label>
                            <input
                                id='quantity'
                                type='text'
                                name='quantity'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Comment
                            </label>
                            <input
                                id='comment'
                                name='comment'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Return Date</label>

                            {/* Date Picker Input Field */}
                            <DatePicker className="border rounded-md p-2" selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                        >
                            Borrowing Book
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default BookDetails
