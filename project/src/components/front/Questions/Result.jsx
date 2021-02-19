import React, { useState, useEffect } from 'react'
import Footer from "../Footer/Footer"





const Resultat = ({ answers }) => {

    const [rouge, setRouge] = useState(0)
    const [vert, setVert] = useState(0)
    const [blue, setBlue] = useState(0)
    const [jaune, setJaune] = useState(0)


    console.log(rouge + "rouge")
    console.log(vert + "vert")
    console.log(blue + "blue")
    console.log(jaune + "jaune")
    console.log(answers)


    const testando = () => {
        answers.map(item => {

            if (item.step === 1) {
                switch (item.reponse) {

                    case "rouge": setRouge(rouge + 1)
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

                    case "rouge": setRouge(rouge + 1)
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

                    case "rouge": setRouge(rouge + 1)
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

                    case "rouge": setRouge(rouge + 1)
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
        console.log(rouge)
    }, [])


    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h3> Resultat:</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultat;
