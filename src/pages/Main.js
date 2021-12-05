import React from 'react'
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import { HashRouter,Route } from "react-router-dom";
const Main = () => {
    return (
       
            <HashRouter>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/" component={HomePage} />
                <Route path="/SecondPage" component={SecondPage} />
            </HashRouter>

    )
}

export default Main
