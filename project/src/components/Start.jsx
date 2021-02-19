import React from 'react'

const Start = ({ quizStartHandler }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="contente">
                    <h1>Commencer le Quiz</h1>
                    <button className="button is-info is-medium" onClick={quizStartHandler}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start
