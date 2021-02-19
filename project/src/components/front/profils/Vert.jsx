import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="color">
                <h2>  PROFILE</h2>&nbsp;&nbsp;&nbsp;&nbsp; <h2 className="vert marge">VERT </h2>
            </div>

            <div className="descrip">
                <p>
                    Le vert est symbole de vie, de croissance, d’harmonie et de stabilité, tel cet arbre bien ancré par ses racines. C’est une couleur qui réconforte, détend et dont il fait bon s’entourer.
                </p>

                <p>
                    Les personnes avec un profil à dominante “verte” sont souvent discrètes et coopératives. Elles perçoivent l’environnement de manière favorable/sociable et sont orientées vers l’introversion/réflexion.
                </p>

                <h4>Le profil vert en quelques mots :</h4>
                <p>
                    Attentionné, à l’écoute, calme, compréhensif, consistant, coopérant, détendu, empathique, lent, loyal, patient.
                </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h4>Les caractéristiques principales pour une personnalité à dominante vert :</h4>
                    <ul>
                        <li>Attention, stabilité et patience, aime les relations personnalisées.</li>
                        <li>Recherche la cohérence et l’harmonie, besoin d’anticiper.</li>
                        <li>N’aime pas les conflits, soutient et écoute activement les autres.</li>
                        <li>Recherche la sécurité et le sentiment d’appartenance.</li>
                    </ul>

                </div>

                <div className="pour">
                    <h4>Pour bien communiquer avec un interlocuteur à dominante vert, il faut :</h4>
                    <ul>
                        <li>Être empathique, relationnel et amical, créer une relation de partenariat et de solidarité.</li>
                        <li>Se donner du temps pour construire petit à petit la confiance.</li>
                        <li>Ne pas les exposer en leur demandant leur avis, les accompagner et les aider à décider.</li>
                        <li>Être patient et les mettre en confiance.</li>
                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception de son environnement</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Perception favorable de l’environnement et orienté vers l’introversion.
                        “Je peux stabiliser mon environnement.”
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Motivations</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Être utile aux autres, évoluer dans un environnement stable, cohérent et harmonieux.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Peurs</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Perte de sécurité, de stabilité et de repères.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes de stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Conflits, pression, urgence, changements de rythme.
                    </p>
                </div>
                <div className="ligne"><hr /></div>
                <div className="next-space"></div>
            </div>
        </div>
    )
}

export default Rouge
