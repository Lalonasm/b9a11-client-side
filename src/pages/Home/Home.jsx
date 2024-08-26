import React from 'react';
import Carousel from '../../components/banner/Carousel';
import Blogs from './Blogs/Blogs';
import RecentBlogs from './Blogs/RecentBlogs';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Blogs></Blogs>
            <RecentBlogs></RecentBlogs>
        </div>
    );
};

export default Home;