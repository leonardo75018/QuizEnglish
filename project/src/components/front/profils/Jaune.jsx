import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="color">
                <h2>  PROFILE</h2> &nbsp;&nbsp;&nbsp;&nbsp;  <h2 className="jaune marge">JAUNE </h2>
            </div>
            <div className="descrip">
                <p>
                    Symbolisée par le soleil, la composante jaune décrit la manière dont une personne influence et interagit avec les autres. Ce comportement résulte d’une orientation vers l’action dans un environnement perçu comme favorable.
                </p>
                <p>
                    Les personnes avec un profil à dominante  “jaune” sont sociables et communicantes. Elles perçoivent l’environnement de manière favorable/sociable et sont orientées vers l’extraversion/action.
                </p>
                <h4>Le profil jaune en quelques mots :</h4>
                <p>
                    Amical,  assuré, communicant, créatif, démonstratif, enthousiaste, expansif, inspirant, optimiste, persuasif, spontané, et rêveur.                </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h4>Les caractéristiques principales pour une personnalité à dominante jaune :</h4>
                    <ul>
                        <li>Optimisme, enthousiasme, communication, actions et décisions spontanées.</li>
                        <li>Recherche l’estime et la reconnaissance, aime travailler en groupe.</li>
                        <li>Créativité, tendance à rêver, talent pour persuader et sens de l’improvisation</li>
                    </ul>

                </div>

                <div className="pour">
                    <h4>Pour bien communiquer avec un interlocuteur à dominante jaune, il faut :</h4>
                    <ul>
                        <li>Se montrer relationnel, chaleureux et enthousiaste, partager le plaisir et le laisser s’exprimer.</li>
                        <li>Être créatif et informel, montrer à la personne que vous l’appréciez (vraiment) </li>
                        <li>Entrer dans son réseau d’influence.</li>
                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception de son environnement</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Perception favorable de l’environnement Orienté vers les autres et vers l’action.
                        “Je peux influencer mon environnement.”
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Motivations</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        La relation aux autres, la reconnaissance sociale et la créativité.                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Peurs</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Peur de ne plus être aimé ou reconnu et peur de perdre sa liberté.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes de stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Environnement conflictuel, règles, procédures, contraintes. Détails, rester sur place. Travailler de manière isolée.
                    </p>
                </div>
                <div className="ligne"><hr /></div>
            </div>
            <div className="next-space"></div>
        </div>
    )
}

export default Rouge
