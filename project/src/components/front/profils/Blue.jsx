import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="color">
                <h2> PROFILE </h2> &nbsp;&nbsp;&nbsp;&nbsp;   <h2 className="blue marge">BLUE</h2>
            </div>


            <div className="descrip">
                <p>
                    Symbolized by rigor, the blue component describes the way a person complies and reacts to the rules and procedures laid down by others. This behaviour is the result of a reflective orientation in a perceived hostile environment.
              </p>
                <p>
                    People with a predominantly blue profile perceive the environment as hostile and are oriented towards introversion/reflection. They will be described by others as factual, logical, organized, knowing how to organize, structure and control.                </p>
                <h4>The blue profile in a few words :</h4>
                <p>
                    Analytical, conventional, distant, accurate, demanding, factual, precise, realistic, and structured.
                </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h4>The main characteristics for a predominantly blue personality :</h4>
                    <ul>
                        <li>Search for facts and logical explanations.</li>
                        <li>Prudent actions and decision making, organization, structure and details.</li>
                        <li>Analytical and task-oriented objective, working alone with great precision.</li>
                    </ul>

                </div>

                <div className="pour">
                    <h4>In order to communicate well with a blue-dominant person, you need to :</h4>
                    <ul>
                        <li>Be precise, factual and structured.</li>
                        <li>Prepare your interviews in advance.</li>
                        <li>Introduce the subject, the context and validate the time required.</li>
                        <li>Take time for details.</li>
                        <li>Do not rush and be distant without touching the person.</li>
                        <li>Do not try to warm up the atmosphere.</li>
                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception de son environnement</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Unfavourable perception of the environment and oriented towards introversion.
                        "I can conform to my environment".
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Motivations</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Comply with high standards in a perceived hostile environment.
                   </p>
                </div>
                <div className="ligne"><hr /></div>

                <div className="autres-tile"> <h4>Fears</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Fear of error, fear of loss of security.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes of stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Fears criticism and does not like to be caught unawares. Does not like to work in a rush. Fears the absence of rules.                    </p>
                </div>
                <div className="ligne"><hr /></div>
                <div className="next-space"></div>
            </div>
        </div>
    )
}

export default Rouge
