import React from 'react'
import colortText from "../../../image/colorText.png"
import "./start.css"
import Footer from "../Footer/Footer"


const Start = ({ quizStartHandler }) => {
    const text = [
        "Ce test comprend  vingt-cinq propositions. ",
        " Sélectionnez la ligne composée des deux adjectifs qui vous qualifient le mieux. Votre résultat sera d’autant plus précis que vous répondrez spontanément.",
        "Ça prendra 5 minutes. Êtes-vous prêt à commencer ?"
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
            <button className="btn-start" onClick={quizStartHandler}>Allons-y</button>
            <div className="start-space"></div>
            <Footer />


        </div>
    )
}

export default Start








