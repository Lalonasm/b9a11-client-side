import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";

const AddBooks = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const book_title = form.book_title.value;
        // const deadline = startDate;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const rating = parseFloat(form.rating.value);
        const description = form.description.value;
        const context = form.context.value;


        // const email = user?.email;
        // const buyer_email = buyer_email;
        // const status = 'Pending';



        const bookData = {
            book_title,
            category,
            price,
            quantity,
            rating,
            context,
            description,
            borrower: {
                email,
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        try {
            const { data } = await axios.post(`https://b9-a11-server-side.vercel.app/book`, bookData);
            console.log('add book', data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully added",
                showConfirmButton: false,
                timer: 1500
            });
            toast.success('book Data Updated Successfully!')
            // navigate('/allBooks');
        }
        catch (err) {
            console.log(err);
            console.log('Hi , I am error', err.message)
        }
        // console.table(bidData);
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Add a Book
                </h2>

                <form onSubmit={handleForm}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='book_title'>
                                Book Name
                            </label>
                            <input
                                id='book_title'
                                name='book_title'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                defaultValue={user?.email}
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='quantity'>
                                Quantity
                            </label>
                            <input
                                id='quantity'
                                name='qunatity'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md'
                            >
                                <option value='Novel'>Novel</option>
                                <option value='Thriller'>Thriller</option>
                                <option value='Drama'>Drama</option>
                                <option value='Sci-Fi'>Sci-Fi</option>
                                <option value='History'>History</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='book_image'>
                                Image
                            </label>
                            <input
                                id='book_image'
                                name='book_image'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='author_name'>
                                Author Name
                            </label>
                            <input
                                id='author_name'
                                name='author_name'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Price
                            </label>
                            <input
                                id='price'
                                name='price'
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='rating'>
                                Ratings
                            </label>
                            <input
                                id='rating'
                                name='rating'
                                type='number'
                                placeholder="Rate this from 1 to 5"
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Short Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='context'>
                            Some Context
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='context'
                            id='context'
                        ></textarea>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='px-12 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Add Book
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddBooks