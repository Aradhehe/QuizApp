import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
export function Mainpage() {
    const navigate = useNavigate();
    const routetologin = () => {
        // const history =useNavigate();
        // history("/login");
        navigate('/quizscreen');
        console.log("ok", navigate);
    }
    return <>
        <h1>Welcome to our Quiz !</h1>
        <br></br>
        <h2>Before we begin there are some rules you must follow!</h2>
        <br>
        </br>
        <p>
            <ul>
                <li>
                    There are no negative markings
                </li>
                <li>
                    The quiz is timed
                </li>
                <li>
                    Every question is mandatory!
                </li>
                <li>
                    Enjoy the quiz!
                </li>
            </ul>
        </p>
        <input type="button" value="Startquiz" onClick={routetologin}></input>
    </>
} export default Mainpage;