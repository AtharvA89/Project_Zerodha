import React from 'react';
import { useEffect, useState } from "react";

import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Hero from './Hero';
import OpenAccout from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




function HomePage() {
    // const navigate = useNavigate();
    // const [cookies, removeCookie] = useCookies([]);
    // const [username, setUsername] = useState("");
    // useEffect(() => {
    //   const verifyCookie = async () => {
    //     if (!cookies.token) {
    //       navigate("/login");
    //     }
    //     const { data } = await axios.post(
    //       "http://localhost:3002",
    //       {},
    //       { withCredentials: true }
    //     );
    //     const { status, user } = data;
    //     setUsername(user);
    //     return status
    //       ? toast(`Hello ${user}`, {
    //           position: "top-right",
    //         })
    //       : (removeCookie("token"), navigate("/login"));
    //   };
    //   verifyCookie();
    // }, [cookies, navigate, removeCookie]);
    // const Logout = () => {
    //   removeCookie("token");
    //   navigate("/signup");
    // };
    return ( 
        <>
        <ToastContainer />
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccout/>
        </>
    );
}

export default HomePage;