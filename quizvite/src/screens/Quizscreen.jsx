import { useState } from "react"
import { Quizdata } from "../Questions/Quizdata"
import End from "./End";
import { useNavigate } from 'react-router-dom';

export const Quizscreen = () => {
    const navigate = useNavigate();
    const [currentquestion, setcurrentques] = useState(0);
    const [score, Setscore] = useState(0);
    const [clickedOption, setSelectedoption] = useState(0);
    const [showresult, setshowresult] = useState(false);
    // const [isQuizEnded, setQuizEnded] = useState(false);
    const changequestion = () => {
        Updatescore();
        if(currentquestion === Quizdata.length - 1){
            setshowresult(true);
        } else {
            setcurrentques(currentquestion+1)
            setSelectedoption(0);
            
        }
    }
    const Updatescore = () => {
        console.log("I am here", "clickedOption =", clickedOption, "answer=", Quizdata[currentquestion].answer, "score= ", score)
        if (clickedOption === Quizdata[currentquestion].answer) {
            console.log("current score", score)
            Setscore(score + 1)
        }
    }
    console.log("currentquestion",currentquestion)
    return (
        <>
            {showresult ? (
                <End 
                score={score}
                totalScore={6}
                />
            ) : (
                    <div>
                        <p className="heading-txt">Quiz app</p>
                        <div className="container" id="cont">
                            <div className="question">
                                <span id="question-num">{currentquestion + 1}</span>
                                <span id="question-text">{Quizdata[currentquestion].question}</span>
                            </div>
                            <div className="option-container" key={`${currentquestion}`}>
                                {
                                    Quizdata[currentquestion].options.map((option, i) =>
                                    (
                                        <button id="btnn" className={`option-btn ${clickedOption === i ? "checked" : null}`}
                                           key={i}  onClick={() => {
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
        </>
    )
}












