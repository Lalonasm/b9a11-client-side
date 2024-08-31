import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
// import Footer1 from '../components/Shared/Footer1';


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
               <div className='min-h-[calc(100vh-306px)]'>
               <Outlet></Outlet>
               </div>
            </div>
            <Footer></Footer>
            {/* <Footer1></Footer1> */}
        </div>
    );
};

export default Root;