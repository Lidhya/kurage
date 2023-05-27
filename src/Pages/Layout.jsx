import React, { useState } from 'react';
import LeftBar from '../Components/LeftBar';
import Dashboard from '../Components/Dashboard';

const Layout = () => {
    const [selectedNavItem, setSelectedNavItem]=useState(null)
    const changeSelectedNavItem =(item) => {
        setSelectedNavItem(item)
    }
    return (
        <div className='flex'>
            <div className='hidden md:block w-1/5'><LeftBar changeSelectedNavItem={changeSelectedNavItem}/></div>
            <div className='w-full md:w-4/5'><Dashboard selectedNavItem={selectedNavItem}/></div>
        </div>
    );
}

export default Layout;
