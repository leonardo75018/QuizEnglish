import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="color">
                <h2> PROFILE </h2> &nbsp;&nbsp;&nbsp;&nbsp;   <h2 className="blue marge">BLEU</h2>
            </div>


            <div className="descrip">
                <p>
                    Symbolisée par la rigueur, la composante bleue décrit la manière dont une personne se conforme et réagit aux règles et aux procédures édictées par les autres. Ce comportement résulte d’une orientation vers la réflexion dans un environnement perçu comme hostile.

                </p>
                <p>
                    Les personnes avec un profil à dominante bleue perçoivent l’environnement de manière hostile, et sont orientées vers l’introversion/réflexion. Elles seront décrite par les autres comme des personnes factuelles, logiques, organisées, sachant organiser, structurer et contrôler.
                </p>
                <h4>Le profil bleu en quelques mots :</h4>
                <p>
                    Analytique, conventionnel, distant, exact, exigeant, factuel, précis, réaliste, et structuré.                </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h4>Les caractéristiques principales pour une personnalité à dominante bleue :</h4>
                    <ul>
                        <li>Recherche des faits et des explications logiques.</li>
                        <li>Actions et prises de décisions prudentes, organisation, structure et détails.</li>
                        <li>Objectif analytique et orienté vers la tâche, travail solitaire avec beaucoup de précision.</li>
                    </ul>

                </div>

                <div className="pour">
                    <h4>Pour bien communiquer avec un interlocuteur à dominante bleue, il faut :</h4>
                    <ul>
                        <li>Être précis, factuel et structuré.</li>
                        <li>Préparer ses entretiens à l’avance.</li>
                        <li>Introduire le sujet, le contexte et valider le temps nécessaire.</li>
                        <li>Prendre le temps pour les détails.</li>
                        <li>Ne pas brusquer et être distant sans toucher la personne.</li>
                        <li>Ne pas chercher à réchauffer l’ambiance.</li>

                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception de son environnement</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Perception défavorable de l’environnement et orienté vers l’introversion.
                        “Je peux me conformer à mon environnement.”
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Motivations</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Se conformer à des standards élevés dans un environnement perçu de manière hostile.                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Peurs</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Peur de l’erreur, peur de perte de sécurité.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes de stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Craint la critique et n’aime pas être pris à l’improviste. N’aime pas travailler dans l’urgence. Craint l’absence de règles.
                    </p>
                </div>
                <div className="ligne"><hr /></div>
                <div className="next-space"></div>






            </div>
        </div>
    )
}

export default Rouge
