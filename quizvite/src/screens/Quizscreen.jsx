import { useState, useEffect } from "react"
// import { quizData } from "../Questions/quizData"
import End from "./End";
import { useNavigate } from 'react-router-dom';
import React from "react";
import axios from "axios";

export const Quizscreen = () => {
    const navigate = useNavigate();
    const [currentquestion, setcurrentques] = useState(0);
    const [score, Setscore] = useState(0);
    const [clickedOption, setSelectedoption] = useState(0);
    const [showresult, setshowresult] = useState(false);
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {

        fetch(`https://mocki.io/v1/065eb9f0-e89d-459e-8f6f-7a73fd28d42f`)
            .then((response) => response.json())
            .then((data) => { setQuizData(data); });
    }, []);

    console.log("quizData", quizData);
    // const [isQuizEnded, setQuizEnded] = useState(false);
    const changequestion = () => {
        Updatescore();
        if (currentquestion === quizData.length - 1) {
            setshowresult(true);
        } else {
            setcurrentques(currentquestion + 1)
            setSelectedoption(0);

        }
    }
    const Updatescore = () => {
        console.log("I am here", "clickedOption =", clickedOption, "answer=", quizData[currentquestion].answer, "score= ", score)
        if (clickedOption === quizData[currentquestion].answer) {
            console.log("current score", score)
            Setscore(score + 1)
        }
    }
    console.log("currentquestion", currentquestion)
    const renderQuizData = () => {
        if (Array.isArray(quizData) && quizData.length > 0)
            return (

                <div>
                    <p className="heading-txt">Quiz app</p>
                    <div className="container" id="cont">
                        <div className="question">
                            <span id="question-num">{currentquestion + 1}</span>
                            <span id="question-text">{quizData[currentquestion].question}</span>
                        </div>
                        <div className="option-container" key={`${currentquestion}`}>
                            {
                                quizData[currentquestion].options.map((option, i) =>
                                (
                                    <button id="btnn" className={`option-btn ${clickedOption === i ? "checked" : null}`}
                                        key={i} onClick={() => {
                                            setSelectedoption(i);
                                        }}>
                                        {option}
                                    </button>
                                ))
                            }
                        </div>
                        <input type="button" value="Next" id="next-btn" onClick={changequestion} />
                    </div>
                </div>
            )
    }
    return (
        <>
            {showresult ? (
                <End
                    score={score}
                    totalScore={6}
                />
            ) : renderQuizData()
            }
        </>
    )
}

















