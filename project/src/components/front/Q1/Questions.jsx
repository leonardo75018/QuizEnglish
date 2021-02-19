import React, { useState, useEffect, useRef } from 'react'
import { Fragment } from 'react';
import "./questions.css"

import End from "../End/End"



const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    const [answers, setAnswers] = useState([])

    const [rouge, setRouge] = useState(0)
    const [vert, setVert] = useState(0)
    const [blue, setBlue] = useState(0)
    const [jaune, setJaune] = useState(0)





    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value)
        if (error) {
            setError("");
        }
    }


    const nextClickHandler = (e) => {
        if (selected === "")
            return setError("veuillez sélectionner une option!");

        setAnswers(prevState => [...prevState, { step: data.step, q: data.question, reponse: selected, }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(5);
        }
    }


    const testando = () => {

        const estado = answers.map(estado => estado.step)

        answers.map(item => {
            if (item.step === 1) {
                switch (item.reponse) {
                    case "rouge": setRouge(rouge + 1);
                        break;
                    case "vert": setVert(vert + 1);
                        break;
                    case "blue": setBlue(blue + 1);
                        break;
                    case "jaune": setJaune(jaune + 1);
                        break;
                    default: console.log("felicitation vous etes pd")
                }
            }

            if (item.step === 2) {
                switch (item.reponse) {
                    case "rouge": setRouge(rouge + 1);
                        break;
                    case "vert": setVert(vert + 1);
                        break;
                    case "blue": setBlue(blue + 1);
                        break;
                    case "jaune": setJaune(jaune + 1);
                        break;
                    default: console.log("felicitation vous etes pd")
                }
            }


            if (item.step === 3) {
                switch (item.reponse) {
                    case "rouge": setRouge(rouge + 1);
                        break;
                    case "vert": setVert(vert + 1);
                        break;
                    case "blue": setBlue(blue + 1);
                        break;
                    case "jaune": setJaune(jaune + 1);
                        break;
                    default: console.log("felicitation vous etes pd")
                }
            }


            if (item.step === 4) {
                switch (item.reponse) {
                    case "rouge": setRouge(rouge + 1);
                        break;
                    case "vert": setVert(vert + 1);
                        break;
                    case "blue": setBlue(blue + 1);
                        break;
                    case "jaune": setJaune(jaune + + 1);
                        break;
                    default: console.log("felicitation vous etes pd")
                }
            }



        }
        )
    }




    console.log("rouge" + rouge)











    return (
        <div>
            <div className="card">
                <div className="content">
                    <div className="step">
                        {
                            data.step === 5 ?
                                (<h3>Terminé!</h3>) :
                                (<h3> {data.step}/25 </h3>)
                        }
                    </div>
                    <progress value={data.step} max="5" />



                    {
                        data.step === 5 ?
                            (
                                <div ref={radiosWrapper}>
                                    <End answers={answers} />

                                </div>
                            ) :
                            (
                                <div className="control" ref={radiosWrapper}>
                                    {data.choices.map((choice, i) => (
                                        <Fragment key={i}>
                                            <h3>Vous êtes plustôt ...</h3>
                                            <label className="radio has-background-ligh">
                                                <input type="radio" name="answer" value={choice.a.groupe} onChange={changeHandler} />
                                                {choice.a.possi}
                                            </label>
                                            <label className="radio has-background-ligh">
                                                <input type="radio" name="answer" value={choice.b.groupe} onChange={changeHandler} />
                                                {choice.b.possi}
                                            </label>
                                            <label className="radio has-background-ligh">
                                                <input type="radio" name="answer" value={choice.c.groupe} onChange={changeHandler} />
                                                {choice.c.possi}
                                            </label>
                                            <label className="radio has-background-ligh">
                                                <input type="radio" name="answer" value={choice.d.groupe} onChange={changeHandler} />
                                                {choice.d.possi}
                                            </label>
                                        </Fragment>
                                    ))}

                                    <div className="error">
                                        {error && <div className="has-text-danger">{error}</div>}
                                    </div>

                                    <div className="  btn-content">
                                        <button className="btn-next" onClick={nextClickHandler}></button>
                                    </div>

                                </div>
                            )
                    }

                </div>
            </div>
        </div >
    )
}

export default Question
