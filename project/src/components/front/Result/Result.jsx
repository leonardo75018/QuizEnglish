import React, { useState, useEffect } from "react"
import Footer from "../Footer/Footer"
import "./result.css"

import Rouge from "../profils/Rouge"
import Jaune from "../profils/Jaune"
import Vert from "../profils/Vert"
import Blue from "../profils/Blue"






const Result = ({ answers }) => {


    const [profile, setProfile] = useState("")

    // const [result, setResult] = useState("")

    // const finaly = []

    // const anality = () => {
    //     const t = answers.sort(function (a, b) { return b.points - a.points })

    //     if (t[0].points === t[1].points) {
    //         setResult(t[0].groupe + "/" + t[1].groupe)

    //     } else {
    //         setResult(t[0].groupe)
    //     }

    // }

    // useEffect(() => {
    //     anality()
    // }, [])


    return (
        <div className="result-main">
            <div className="result-container">
                <h4>Merci !</h4>
                <p className="disc"> Votre profil DISC :</p>
                <div className="groupe">
                    {
                        answers.map(item =>
                            <div className="groupe">
                                <h3 className="rouge"  >{item.rouge}</h3>
                                <h3 className="jaune"  >{item.jaune}</h3>
                                <h3 className="vert" >{item.vert}</h3>
                                <h3 className="blue" >{item.blue}</h3>
                            </div>
                        )
                    }
                </div>
                <div className="points">
                    {answers.map(item => <h3>{item.points}  </h3>)}
                </div>
                {
                    profile.length === 0 ?
                        (
                            <div className="result-p">
                                <p> Ce profil est votre style propre. C’est celui que vous utiliser spontanément quand vous n’êtes pas contraint de vous adapter à une situation, quand vous ne subissez ni pression ni stress, ou que vous n’êtes pas dans l’obligation d’adapter votre profil de personnalité à un contexte.</p>
                            </div>
                        ) : (<div> </div>)

                }

            </div>
            <Rouge />
            <Jaune />
            <Vert />
            <Blue />
            <Footer />
        </div>
    )
}

export default Result
