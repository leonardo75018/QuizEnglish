import React from 'react'
import colortText from "../../../../image/colorText.png"
import "./start.css"
const home = () => {

    const text = [
        "Ce test comprend une série de vingt-cinq propositions. ",
        " Sélectionnez la ligne composée des deux adjectifs qui vous qualifient le mieux. Votre résultat sera d’autant plus précis que vous répondrez spontanément.",
        "Ça prendra 5 minutes. Êtes-vous prêt à commencer ?"
    ]




    return (
        <div className="contente">

            <div className="intro">
                <h2>Le DISC de Marston</h2>
                <div className="colortText-contente"><img src={colortText} alt="" /></div>
            </div>


            <div className="text">
                <div className="text-contente">
                    {text.map(item => <p>{item}</p>)}
                </div>
            </div>

            <button>Allons-y</button>
        </div>
    )
}

export default home
