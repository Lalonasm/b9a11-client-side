/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const BookCard = ({ book }) => {

    const { _id, book_title, Rating, author_name, deadline, category, description, price } = book || {}

    return (
        <Link to={`/book/${_id}`} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
            <div className='flex items-center justify-between'>
                <span className='text-xs font-light text-gray-800 '>
                    Deadline: {new Date(deadline).toLocaleDateString()}
                </span>
                <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}
                </span>
            </div>

            <div>
                <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                    {book_title}
                </h1>
                <h1 className='mt-2 text-sm font-semibold text-gray-800 '>
                    {author_name}
                </h1>

                <p title={description} className='mt-2 text-sm text-gray-600 '>
                    {description.substring(0, 70)}...
                </p>
                <div className="flex justify-between space-x-4">
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Price: ${price}
                    </p>
                    <p className='mt-2 m-2 text-sm font-semibold text-gray-600 '>
                        Rating :  {Rating}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default BookCard;