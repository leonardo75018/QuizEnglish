import React, { useState, useEffect, useRef } from 'react'
import { Fragment } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {






    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

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

        onAnswerUpdate(prevState => [...prevState, { step: data.step, q: data.question, reponse: selected, }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }


    return (
        <div>


            {/* {data.choices.map((choice, i) => (
                <div key={i}>
                    <label className="radio has-background-ligh">
                        <input type="radio" name="answer" value={"a"} onChange={changeHandler} />
                        {"a" + choice.a}
                    </label>
                    <label className="radio has-background-ligh" >
                        <input type="radio" name="answer" value={"b"} onChange={changeHandler} />
                        {"b" + choice.b}
                    </label>
                    <label className="radio has-background-ligh" >
                        <input type="radio" name="answer" value={"c"} onChange={changeHandler} />
                        {"d" + choice.c}
                    </label>
                </div>
            ))} */}


            <div className="card">
                <div className="card-content">
                    <div className="contente">
                        <h2 className="mb-5"> {data.question} </h2>
                        <div className="control" ref={radiosWrapper}>
                            {data.choices.map((choice, i) => (
                                <Fragment key={i}>
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

                        </div>
                        {error && <div className="has-text-danger">{error}</div>}
                        <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
                    </div>
                </div>
            </div>









            {/* <div className="card">
                <div className="card-content">
                    <div className="contente">
                        <h2 className="mb-5"> {data.question} </h2>
                        <div className="control" ref={radiosWrapper}>
                            {data.choices.map((choice, i) => (
                                <label className="radio has-background-ligh" key={i}>
                                    <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                    {choice}
                                </label>
                            ))}
                        </div>
                        {error && <div className="has-text-danger">{error}</div>}
                        <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Question
