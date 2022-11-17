import React from 'react';
import './styling/Homepage.css';

const Homepage = () => {
    return (
        <div className='Homepage'>
            <header className='Home-header'>
                <h1>
                    Welcome to my website!
                </h1>
            </header>
            <body className='Personal-description'>
                I am Akhil Kanagala. 
                <br/>
                I am a 3rd year Computer Science student at the University of Texas at Dallas.
                <br/>
                This is my personal website, where I will be organizing all my information into one place for visual purposes.
            </body>
        </div>
    )
};

export default Homepage;
