// import { useContext, useState } from "react";
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";

// const AddBook = () => {
//     // const [startDate, setStartDate] = useState(new Date());
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleFormSubmission = async (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const book_title = form.book_title.value;
//         // const Rating = form.Rating.value;
//         const category = form.category.value;
//         // const Rating = form.Rating.value;
//         const quantity = parseFloat(form.quantity.value);
//         // const price = parseFloat(form.price.value);
//         const description = form.description.value;

//         // const email = user?.email;
//         // const buyer_email = buyer_email;
//         // const status = 'Pending';



//         const bookData = {
//             book_title,
//             author_name,
//             category,
//             quantity,
//             // price,
//             // Rating,
//             description,
//             buyer: {
//                 email,
//                 name: user?.displayName,
//                 photo: user?.photoURL
//             }
//         }
//         try {
//             const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/book`, bookData);
//             console.log(data);
//             toast.success('book Data Updated Successfully!')
//             navigate('/my-posted-jobs');
//         }
//         catch (err) {
//             console.log(err);
//             console.log('Hi , I am error', err.message)
//         }
//         // console.table(bidData);
//     }

//     return (
//         <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
//             <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
//                 <h2 className='text-lg font-semibold text-gray-700 capitalize '>
//                     Add a Book
//                 </h2>

//                 <form onSubmit={handleFormSubmission}>
//                     <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
//                         <div>
//                             <label className='text-gray-700 ' htmlFor='job_title'>
//                                 Book Name
//                             </label>
//                             <input
//                                 id='book_title'
//                                 name='book_title'
//                                 type='text'
//                                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             />
//                         </div>

//                         <div>
//                             <label className='text-gray-700 ' htmlFor='emailAddress'>
//                                 Email Address
//                             </label>
//                             <input
//                                 id='email'
//                                 type='email'
//                                 name='email'
//                                 defaultValue={user?.email}
//                                 disabled
//                                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             />
//                         </div>
//                         <div className='flex flex-col gap-2 '>
//                             <label className='text-gray-700 ' htmlFor='author_name'>
//                                 Author Name
//                             </label>
//                             <input
//                                 id='author_name'
//                                 name='author_name'
//                                 type='text'
//                                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             />
//                         </div>

//                         <div className='flex flex-col gap-2 '>
//                             <label className='text-gray-700 ' htmlFor='category'>
//                                 Category
//                             </label>
//                             <select
//                                 name='category'
//                                 id='category'
//                                 className='border p-2 rounded-md'
//                             >
//                                 <option value='Novel'>Novel</option>
//                                 <option value='Thriller'>Thriller</option>
//                                 <option value='History'>History</option>
//                                 <option value='Drama'>Drama</option>
//                                 <option value='Sci-Fi'>Sci-Fi</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className='text-gray-700 ' htmlFor='quantity'>
//                                 Quantity
//                             </label>
//                             <input
//                                 id='quantity'
//                                 name='quantity'
//                                 type='number'
//                                 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             />
//                         </div>

//                         <div className='flex flex-col gap-2 '>
//                             <label className='text-gray-700 ' htmlFor='Rating'>
//                                 Rating
//                             </label>
//                             <select
//                                 name='category'
//                                 id='category'
//                                 className='border p-2 rounded-md'
//                             >
//                                 <option value='1'>1</option>
//                                 <option value='2'>2</option>
//                                 <option value='3'>3</option>
//                                 <option value='4'>4</option>
//                                 <option value='5'>5</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="flex-grow">
//                         <label className='text-gray-700 ' htmlFor='book_image'>
//                             Image
//                         </label>
//                         <input
//                             id='book_image'
//                             name='book_image'
//                             type='text'
//                             className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                         />
//                     </div>




//                     <div className='flex flex-col gap-2 mt-4'>
//                         <label className='text-gray-700 ' htmlFor='description'>
//                             Description
//                         </label>
//                         <textarea
//                             className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                             name='description'
//                             id='description'
//                         ></textarea>
//                     </div>
//                     <div className='flex justify-center mt-6'>
//                         <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
//                             Add Book
//                         </button>
//                     </div>
//                 </form>
//             </section>
//         </div>
//     )
// }

// export default AddBook

// import Footer from "../../Shared/Footer/Footer";
// import Navbar from "../../Shared/Navbar/Navbar";
import Swal from 'sweetalert2'


const AddBooks = () => {

    const handleAddCraft = e => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const item = form.item.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockstatus = form.stockstatus.value;
        const time = form.time.value;
        const email = form.email.value;
        const name = form.name.value;

        const newCraft = { image, item, subcategory, description, price, rating, customization, stockstatus, time, email, name }
        console.log(newCraft);

        // send data to the server
        fetch('https://y-ashen-six.vercel.app/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Item added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="bg-[#f4f3f0] p-30">

            <h2 className="text-4xl   text-orange-400 mb-8">Add New Book </h2>
            <form onSubmit={handleAddCraft} >
                <div className="md:grid-cols-2">
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Image
                            <input type="text" name="image" className="grow" placeholder="Image URL" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Item_Name
                            <input type="text" name="item" className="grow" placeholder="Item Name" />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Subcategory_Name

                            <input type="text" className="grow" name="subcategory" placeholder="Subcategory Name" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Short Description
                            <input type="text" name="description" className="grow" placeholder="Short Description" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Price
                            <input type="text" name="price" className="grow" placeholder="Price" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Rating

                            <input type="text" name="rating" className="grow" placeholder="Ratings" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 text-sm">
                            Customization- example- yes, no

                            <input type="text" name="customization" className="grow" placeholder="Customization " />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Processing_Time
                            <input type="text" name="time" className="grow" placeholder="Processing Time" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2 text-sm">
                            Stock Status - example- In stock, Made to Order

                            <input type="text" name="stockstatus" className="grow" placeholder="Stock Status" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            User Email

                            <input type="text" name="email" className="grow" required placeholder="Your Email" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            User Name

                            <input type="text" name="name" className="grow" required placeholder="Your Name" />
                        </label>
                    </div>


                </div>
                <input type="submit" value="Add New Craft" className="btn btn-block text-white text-xl  bg-orange-400" />
            </form>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default AddBooks;