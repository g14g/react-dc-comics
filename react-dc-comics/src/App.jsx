import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ComicsCards from "./components/ComicsCards";
import Footer from "./components/Footer";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <ComicsCards />
            <Footer />
        </React.Fragment>
    );
}

export default App;
