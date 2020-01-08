import React from 'react';

// Starts with a capital letter is assumed to be react components.  Lowercase assume native html
function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React Flux and React Router ultra responsive web apps</p>
            <a href='/about'>About</a>
        </div>
    );
}

// if file exports only single thing the default is best practice
export default HomePage;