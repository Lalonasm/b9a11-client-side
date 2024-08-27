import React from 'react';
import Carousel from '../../components/banner/Carousel';
import Blogs from './Blogs/Blogs';
import RecentBlogs from './Blogs/RecentBlogs';
import BookCategories from '../../components/BookCategories';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <BookCategories></BookCategories>
            <Blogs></Blogs>
            <RecentBlogs></RecentBlogs>
        </div>
    );
};

export default Home;