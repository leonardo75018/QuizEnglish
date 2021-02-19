import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="color">
                <h2>  PROFILE</h2> &nbsp;&nbsp;&nbsp;&nbsp;  <h2 className="jaune marge">YELLOW </h2>
            </div>
            <div className="descrip">
                <p>
                    Symbolized by the sun, the yellow component describes how a person influences and interacts with others. This behaviour results from an orientation towards action in a perceived supportive environment.                </p>
                <p>
                    People with a predominantly "yellow" profile are sociable and communicative. They perceive the environment in a favourable/sociable way and are oriented towards extroversion/action.                </p>
                <h4>The yellow profile in a few words :</h4>
                <p>
                    Friendly, assertive, communicative, creative, demonstrative, enthusiastic, expansive, inspiring, optimistic, persuasive, spontaneous, and dreamy.                 </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h4>The main characteristics for a predominantly yellow personality :</h4>
                    <ul>
                        <li>Optimisme, enthousiasme, communication, actions et décisions spontanées.</li>
                        <li>Recherche l’estime et la reconnaissance, aime travailler en groupe.</li>
                        <li>Créativité, tendance à rêver, talent pour persuader et sens de l’improvisation</li>
                    </ul>

                </div>

                <div className="pour">
                    <h4>In order to communicate well with a yellow-dominant speaker, you must :</h4>
                    <ul>
                        <li>  Be relational, warm and enthusiastic, share the pleasure and let it express itself.</li>
                        <li>Be creative and informal, show the person that you appreciate him/her (really). </li>
                        <li>Enter his network of influence.</li>
                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception of your environment</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Favourable perception of the environment Oriented towards others and towards action.
                        "I can influence my environment."
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


                <div className="autres-tile"> <h4>Fears</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Fear of no longer being loved or recognized and fear of losing one's freedom.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes of stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Conflictual environment, rules, procedures, constraints. Details, staying on site. Working in isolation.                    </p>
                </div>
                <div className="ligne"><hr /></div>
            </div>
            <div className="next-space"></div>
        </div>
    )
}

export default Rouge
