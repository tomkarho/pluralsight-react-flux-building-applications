import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./common/Header";

// Downside of this kind of approach is that this routing makes a full server roundtrip
function App() {
    const route = window.location.pathname;

    function getPage() {
        if (route === '/about') return <AboutPage/>;

        return <HomePage/>
    }

    return (
        <div className='container-fluid'>
            <Header/>
            {getPage()}
        </div>
    );
}

export default App;