import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar/NavBar';

function Layout() {
    return (
        <div className='min-h-[100vh] min-w-[100vw]'>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default Layout;