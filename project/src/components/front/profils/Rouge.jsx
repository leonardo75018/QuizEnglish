import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="intro-space"></div>
            <div className="color">
                <h2>  PROFILE </h2>&nbsp;&nbsp;&nbsp;&nbsp;  <h2 className="rouge marge">ROUGE</h2>

            </div>
            <div className="descrip">
                <p>
                    C’est la couleur de la force, de l’activité, de la rapidité. Symbole de feu, le rouge est la lave, l’incandescence, la chaleur. Les rayons infrarouges procurent une sensation de chaleur. Cette couleur montre la détermination des personnes à agir.
                </p>
                <p>
                    Les personnes avec profil à dominante “rouge”  sont souvent franches et directes et aiment des défis. Elles perçoivent leur environnement comme hostile alors elles sont orientées vers l’extraversion et l’action.                </p>
                <h4>Le profil rouge en quelques mots :</h4>
                <p>
                    Autoritaire, compétitif, courageux, décidé, déterminé, direct, énergique, entreprenant, exigeant, indépendant, meneur et rapide.
                </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h4>Les caractéristiques principales pour une personnalité à dominante rouge :</h4>
                    <ul>
                        <li>Rapidité, énergie, actions résolues, sens du résultat.</li>
                        <li>Compétitivité, recherche d’un maximum d’indépendance.</li>
                        <li>Recherche d’un maximum de liberté pour se gérer et gérer les autres.</li>
                        <li>Orienté vers les résultats et plus que la relation, travailler rapidement et seul.</li>
                        <li>Décide rapidement.</li>

                    </ul>

                </div>

                <div className="pour">
                    <h4>Pour bien communiquer avec un interlocuteur à dominante rouge, il faut :</h4>
                    <ul>
                        <li>Aller droit au but, exposer ses objectifs et le questionner sur les siens</li>
                        <li>Être concis et affirmé, aller droit à l’essentiel si vous ressentez de l’impatience chez votre interlocuteur.</li>
                        <li>Valoriser ce qu’il a à gagner en allant dans votre sens, l’amener à être moteur et décideur</li>
                        <li>Le faire bouger si possible car il aura dès lors une meilleure écoute.</li>
                        <li>Valoriser son sens du défi et de la réactivité</li>
                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception de son environnement</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Environnement perçu comme hostile, orienté vers l’action.
                        “Je serai plus fort que mon environnement.”
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Motivations</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Diriger, gagner, décider, résoudre des problèmes. Évoluer dans un monde de compétition et de pression. Agir rapidement et faire plusieurs choses à la fois.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Peurs</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Peur de perdre la face, peur que l’on profite de lui et peur de l’échec.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes de stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Déteste la lenteur, s’ennuie vite et redoute l’immobilisme
                    </p>
                </div>
                <div className="ligne"><hr /></div>
                <div className="next-space"></div>
            </div>
        </div>
    )
}

export default Rouge
