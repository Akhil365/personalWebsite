import React from 'react';

const {useState, useEffect} = React;

const Homepage = () => {
    return (
        <div className='Homepage'>
            <header className='Home-header'>
                <h1>
                    Welcome to my website!
                </h1>
            </header>
            <body>
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
