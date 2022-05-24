import React from 'react';
import Header from '~/Components/Layout/Components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
