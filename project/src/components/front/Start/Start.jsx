import React from 'react'
import colortText from "../../../image/colorText.png"
import "./start.css"
import Footer from "../Footer/Footer"


const Start = ({ quizStartHandler }) => {
    const text = [
        "  This test consists of a series of twenty-five proposals. ",
        " Select the line consisting of the two adjectives that best qualify you.  The more spontaneous your answers, the more accurate your result will be. ",
        "It will take 5 minutes. Are you ready to start?"
    ]


    return (
        <div className="contente">

            <div className="intro">
                <h1>Le DISC de Marston</h1>
                <div className="colortText-contente"><img src={colortText} alt="" /></div>
            </div>


            <div className="text">
                <div className="text-contente">
                    {text.map(item => <p>{item}</p>)}
                </div>
            </div>
            <button className="btn-start" onClick={quizStartHandler}>Let’s Go!</button>
            <div className="start-space"></div>
            <Footer />


        </div>
    )
}

export default Start








