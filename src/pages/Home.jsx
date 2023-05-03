import React from "react";
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Planets } from '../components/Planets';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="homePage">
        <NavBar />
        <Banner />
        <Planets />
      </div>
    );
} 

export default Home;