import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./pages/CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import CoursePage from "./pages/CoursePage";

function App() {
    return (
        <div className='container-fluid'>
            <Header/>
            {/*Order matter here => Switch render the LAST route when others don't match.  Think of it as switch clause default section*/}
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />

                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={CoursePage} />

                <Redirect from='/about-page' to='about' />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;