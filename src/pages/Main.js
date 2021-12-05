import React from 'react'
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import { BrowserRouter,Route } from "react-router-dom";
const Main = () => {
    return (
       
            <BrowserRouter>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/" component={HomePage} />
                <Route path="/SecondPage" component={SecondPage} />
            </BrowserRouter>

    )
}

export default Main
