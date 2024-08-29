import React from 'react';
import Carousel from '../../components/banner/Carousel';
import Blogs from './Blogs/Blogs';
import RecentBlogs from './Blogs/RecentBlogs';
import BookCategories from '../../components/BookCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    // const {books} = useLoaderData();
    // console.log(books);

    return (
        <div>
            <Carousel></Carousel>
            <BookCategories ></BookCategories>
            <Blogs></Blogs>
            <RecentBlogs></RecentBlogs>
        </div>
    );
};

export default Home;