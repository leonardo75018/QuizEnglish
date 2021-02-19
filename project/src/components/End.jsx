import React, { useState, useEffect } from 'react'




const Resultat = ({ results, data, onReset, onAnswersCheck, answers }) => {

    const [rouge, setRouge] = useState(0)
    const [vert, setVert] = useState(0)
    const [blue, setBlue] = useState(0)
    const [jaune, setJaune] = useState(0)


    console.log("rouge" + rouge)
    console.log("vert" + vert)
    console.log("blue" + blue)
    console.log("jaune" + jaune)



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
        }
        )
    }

    useEffect(() => {
        testando()
    }, [])



    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h3> Resultat:</h3>
                        {/* <p><strong>{type}</strong></p> */}
                        <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answers</button>
                        <button className="button is-success" onClick={onReset}>Try again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultat;
