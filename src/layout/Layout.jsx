import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

function Layout() {
    return (
        <div className='min-h-[100vh] min-w-[100vw]'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;