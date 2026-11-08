import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ComicsCards from "./components/ComicsCards";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <ComicsCards />
        </React.Fragment>
    );
}

export default App;
