import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import BookCard from './BookCard';
import axios from 'axios';

const BookCategories = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://b9-a11-server-side.vercel.app/books`,{withCredentials:true});
            setBooks(data);
        }
        getData();

    }, [])


    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semiibold text-center  text-gray-800 lg:text-3xl'>Browse books by Catagories</h1>
                <p className='max-w-2xl mx-auto my-6 text-center'>
                    Four categories  are available on the time being. They are Fiction, Non-Fiction, Children's Books & Academic. Browse them by clicking on the tab below.
                </p>
                <div className="flex justify-center items-center">
                    <TabList>
                        <Tab>Novel</Tab>
                        <Tab>Thriller</Tab>
                        <Tab>Drama</Tab>
                        <Tab>Sci-Fi</Tab>
                        <Tab>History</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            books.filter(b => b.category === 'Novel').map(book => <BookCard
                                key={book._id}
                                book={book}
                            ></BookCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            books.filter(b => b.category === 'Thriller').map(book => <BookCard
                                key={book._id}
                                book={book}
                            ></BookCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            books.filter(b => b.category === 'Drama').map(book => <BookCard
                                key={book._id}
                                book={book}
                            ></BookCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            books.filter(b => b.category === 'Sci-Fi').map(book => <BookCard
                                key={book._id}
                                book={book}
                            ></BookCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            books.filter(b => b.category === 'History').map(book => <BookCard
                                key={book._id}
                                book={book}
                            ></BookCard>)
                        }
                    </div>
                </TabPanel>

            </div>
        </Tabs>
    );
};

export default BookCategories;