import React, { useState, useEffect } from "react"
import "./questions.css"
import End from "../End/End"
import Footer from "../Footer/Footer"






function App() {

  const questions = [
    {//1
      a: {
        question: "Prudent et réfléchi\n",
        groupe: 4
      },
      b: {
        question: "Loyal et attentif à l'autrui\n",
        groupe: 3
      }

      ,
      c: {
        question: "Influent et démonstratif\n",
        groupe: 2
      },
      d: {
        question: "Stratège et entreprenant\n",
        groupe: 1
      }
    }

    ,
    {//2
      a: {
        question: "Sociable et familier\n",
        groupe: 2
      },
      b: {
        question: "Honnête et discret\n",
        groupe: 3
      },
      c: {
        question: "Énergique et orienté vers le résultat\n",
        groupe: 1
      },
      d: {
        question: "Méthodique et logique\n",
        groupe: 4
      }
    },
    {//3
      a: {
        question: "Calme et d'humeur égale\n",
        groupe: 3
      },
      b: {
        question: "Déterminé et aimant diriger\n",
        groupe: 1
      },
      c: {
        question: "Enjoué et rayonnant\n",
        groupe: 2
      },
      d: {
        question: "Formaliste et factuel\n",
        groupe: 4
      }
    },
    {//4
      a: {
        question: "Sûr de vous  et volontaire\n",
        groupe: 1
      },
      b: {
        question: "Ordonné et concis\n",
        groupe: 4
      },
      c: {
        question: "Familier et stable\n",
        groupe: 3
      },
      d: {
        question: "Loquace et de bonne humeur\n",
        groupe: 2
      }
    },
    {//5
      a: {
        question: "Perspicace et impartial\n",
        groupe: 4
      },
      b: {
        question: "Exigeant et direct\n",
        groupe: 1
      },
      c: {
        question: "Constant et attaché aux valeurs\n",
        groupe: 3
      },
      d: {
        question: "Actif et liant\n",
        groupe: 2
      }
    },
    {//6
      a: {
        question: "Accommodant et serviable\n",
        groupe: 3
      },
      b: {
        question: "Plein d'espoir et expressif\n",
        groupe: 2
      },
      c: {
        question: "Influent et démonstratif\n",
        groupe: 1
      },
      d: {
        question: "Puissant et sûr de lui\n",
        groupe: 4
      }
    },
    {//7
      a: {
        question: "Ouvert et persuasif\n",
        groupe: 2
      },
      b: {
        question: "Appliqué et sélectif dans ses relations\n",
        groupe: 3
      },
      c: {
        question: "Ferme et entreprenant\n",
        groupe: 1
      },
      d: {
        question: "Posé et analytique\n",
        groupe: 4
      }
    },
    {//8
      a: {
        question: "Déterminé et résolu\n",
        groupe: 1
      },
      b: {
        question: "Avenant et jovial\n",
        groupe: 2
      },
      c: {
        question: "Sensible et amical\n",
        groupe: 3
      },
      d: {
        question: "Logique et correct\n",
        groupe: 4
      }
    },
    {//9
      a: {
        question: "Compatissant et diplomate\n",
        groupe: 3
      },
      b: {
        question: "Précis et mesuré\n",
        groupe: 4
      },
      c: {
        question: "Encourageant et ouvert aux idées\n",
        groupe: 2
      },
      d: {
        question: "Orienté résultat et rapide\n",
        groupe: 1
      }
    },
    {//10
      a: {
        question: "Responsable et ferme\n",
        groupe: 1
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 3
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 2
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 4
      }
    },


    //New 
    {//11
      a: {
        question: "Esprit d'équipe et spontané\n",
        groupe: 2
      },
      b: {
        question: "Contrôlé et rationnel\n",
        groupe: 3
      },
      c: {
        question: "Aimable et prévenant\n",
        groupe: 3
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 4
      }
    },
    {//12
      a: {
        question: " Analyste et sceptique\n",
        groupe: 4
      },
      b: {
        question: "Amical et divertissant\n",
        groupe: 2
      },
      c: {
        question: "Exigeant et solide\n",
        groupe: 1
      },
      d: {
        question: "Modeste et fidèle\n",
        groupe: 3
      }
    },
    {//13
      a: {
        question: " Attaché à vos proches et calme\n",
        groupe: 3
      },
      b: {
        question: "Affectif et confiant\n",
        groupe: 2
      },
      c: {
        question: "Observateur et distant\n",
        groupe: 4
      },
      d: {
        question: "Actif et contrôlant\n",
        groupe: 1
      }
    },
    {//14
      a: {
        question: "Volontaire et tenace\n",
        groupe: 1
      },
      b: {
        question: "Conforme et sans parti pris\n",
        groupe: 4
      },
      c: {
        question: "Observateur et distant\n",
        groupe: 2
      },
      d: {
        question: "Actif et contrôlant\n",
        groupe: 3
      }
    },
    {//15
      a: {
        question: "Formel et à principes\n",
        groupe: 4
      },
      b: {
        question: " Jovial et populaire\n",
        groupe: 2
      },
      c: {
        question: "Modérateur et apaisant\n",
        groupe: 3
      },
      d: {
        question: " Ferme et tranchant\n",
        groupe: 1
      }
    },

    {//16
      a: {
        question: "Animé et persuasif\n",
        groupe: 2
      },
      b: {
        question: "Décideur et pressé\n",
        groupe: 1
      },
      c: {
        question: "Analytique et aimant la discipline\n",
        groupe: 4
      },
      d: {
        question: "Tolérant et calme\n",
        groupe: 3
      }
    },
    {//17
      a: {
        question: "Patient et empathique\n",
        groupe: 3
      },
      b: {
        question: "Logique et mesuré\n",
        groupe: 4
      },
      c: {
        question: "Orienté résultat et prêt au défi\n",
        groupe: 1
      },
      d: {
        question: "Ouvert aux idées et arrangeant\n",
        groupe: 2
      }
    },
    {//18
      a: {
        question: "Influent et décontracté\n",
        groupe: 2
      },
      b: {
        question: "Discret et philosophe\n",
        groupe: 3
      },
      c: {
        question: "Réfléchi et circonspect\n",
        groupe: 4
      },
      d: {
        question: "Opiniâtre et déterminé\n",
        groupe: 1
      }
    },
    {//19
      a: {
        question: "Axé procédures et bien préparé\n",
        groupe: 4
      },
      b: {
        question: "Courageux et autonome\n",
        groupe: 1
      },
      c: {
        question: " Extraverti et communicatif\n",
        groupe: 2
      },
      d: {
        question: "Bienveillant et de bon conseil\n",
        groupe: 3
      }
    },
    {//20
      a: {
        question: "Puissant et clair\n",
        groupe: 1
      },
      b: {
        question: "Spontané et vif\n",
        groupe: 2
      },
      c: {
        question: "Studieux et raisonné\n",
        groupe: 4
      },
      d: {
        question: "Paisible et aimant l'harmonie\n",
        groupe: 3
      }
    },
    {//21
      a: {
        question: "Organisé et prudent\n",
        groupe: 4
      },
      b: {
        question: "Patient et serviable\n",
        groupe: 3
      },
      c: {
        question: "Argumenté et sûr de vous\n",
        groupe: 1
      },
      d: {
        question: " Interactif et ouvert\n",
        groupe: 2
      }
    },
    {//22
      a: {
        question: "Indépendant et audacieux\n",
        groupe: 1
      },
      b: {
        question: "Souple et harmonieux\n",
        groupe: 3
      },
      c: {
        question: "Factuel et respectueux des normes\n",
        groupe: 4
      },
      d: {
        question: "Aimable et vivant\n",
        groupe: 2
      }
    },
    {//23
      a: {
        question: " Démonstratif et enthousiaste\n",
        groupe: 2
      },
      b: {
        question: "Directif et réaliste\n",
        groupe: 1
      },
      c: {
        question: "Compatissant et prévenant\n",
        groupe: 3
      },
      d: {
        question: "Attentif et soucieux du détail\n",
        groupe: 4
      }
    },
    {//24
      a: {
        question: "Stable et altruiste\n",
        groupe: 3
      },
      b: {
        question: " Objectif et hardi\n",
        groupe: 1
      },
      c: {
        question: "Consciencieux et introspectif\n",
        groupe: 4
      },
      d: {
        question: "Sociable et bon vivant\n",
        groupe: 2
      }
    },
    {//25
      a: {
        question: "Détaillé et précautionneux\n",
        groupe: 4
      },
      b: {
        question: " Direct et carré\n",
        groupe: 1
      },
      c: {
        question: " Expressif et radieux\n",
        groupe: 2
      },
      d: {
        question: "Tolérant et ferme\n",
        groupe: 3
      }
    }



  ]
  const [i, setI] = useState(0)

  const [choix, setChoix] = useState("")



  const [g1, setG1] = useState(0)
  const [g2, setG2] = useState(0)
  const [g3, setG3] = useState(0)
  const [g4, setG4] = useState(0)





  const [aIseChecked, setAIseChecked] = useState(false)
  const [bIseChecked, setBIseChecked] = useState(false)
  const [cIseChecked, setCIseChecked] = useState(false)
  const [dIseChecked, setDIseChecked] = useState(false)
  const [finish, setFinish] = useState(false)






  useEffect(() => {

  }, [i])

  function addGroupe(int) {
    if (int === 1) {
      setG1(g1 + 1)
    } else if (int === 2) {
      setG2(g2 + 1)
    } else if (int === 3) {
      setG3(g3 + 1)
    } else if (int === 4) {
      setG4(g4 + 1)
    }
  }

  return (
    <div>

      {
        finish === false ?
          <div className="step-content">
            <div className="step">
              {
                i === 25 ?
                  (<h3>Terminé !</h3>) :
                  (<p> {i + 1}/25 </p>)
              }

              {i <= questions.length - 1 ?

                (
                  <div>

                  </div>
                ) : (<div> </div>)
              }
              <progress value={i} max="25" />
            </div>
          </div> : null

      }


      <div className="card">
        {i <= questions.length - 1 ?
          <div className="content" >

            <h3>Vous  êtes  plutôt...</h3>

            <div className="group">
              <label htmlFor="a" className="radio">
                <input onChange={() => {
                  setChoix('a')
                  setAIseChecked(true)
                  setBIseChecked(false)
                  setCIseChecked(false)
                  setDIseChecked(false)
                }} checked={aIseChecked} type="radio" id="a" name="a" />
                <div className="radio--radio"></div>
                {questions[i].a.question}


              </label>
            </div>
            <div className="group">

              <label htmlFor="b" className="radio">
                <input checked={bIseChecked} onChange={() => {
                  setChoix('b')
                  setAIseChecked(false)
                  setBIseChecked(true)
                  setCIseChecked(false)
                  setDIseChecked(false)
                }} type="radio" id="b" name="b" />
                <div className="radio--radio"></div>

                {questions[i].b.question}

              </label>
            </div>


            <div className="group">
              <label htmlFor="c" className="radio">
                <input checked={cIseChecked} onChange={() => {
                  setChoix('c')
                  setAIseChecked(false)
                  setBIseChecked(false)
                  setCIseChecked(true)
                  setDIseChecked(false)
                }} type="radio" id="c" name="c" />
                <div className="radio--radio"></div>
                {questions[i].c.question}
              </label>
            </div>

            <div className="group">
              <label htmlFor="d" className="radio">
                <input checked={dIseChecked} onChange={() => {
                  setChoix('d')
                  setAIseChecked(false)
                  setBIseChecked(false)
                  setCIseChecked(false)
                  setDIseChecked(true)
                }} type="radio" id="d" name="d" value="d" />
                <div className="radio--radio"></div>
                {questions[i].d.question}
              </label>
            </div>

            <div className="btn-space">

              {
                aIseChecked === true || bIseChecked === true || cIseChecked === true || dIseChecked === true ?
                  <div className="btn-content">
                    <button className="btn-next" onClick={() => {

                      if (choix === "a") {
                        addGroupe(questions[i].a.groupe)
                      } else if (choix === "b") {
                        addGroupe(questions[i].b.groupe)
                      } else if (choix === "c") {
                        addGroupe(questions[i].c.groupe)
                      } else if (choix === "d") {
                        addGroupe(questions[i].d.groupe)
                      }
                      //console.log(`stap${i + 1} g1=>${g1}, g2=>${g2}, g3=>${g3}, g4=>${g4}`)
                      setI(i + 1)//passe au chois suivent
                      setAIseChecked(false)//reset les inputs
                      setBIseChecked(false)
                      setCIseChecked(false)
                      setDIseChecked(false)
                    }}></button>
                  </div>

                  : null
              }
            </div>

          </div>

          : <End answers={
            [
              { rouge: "ROUGE", points: g1 },
              { jaune: "JAUNE", points: g2 },
              { vert: "VERT", points: g3 },
              { blue: "BLEU", points: g4 }
            ]
          }
            setFinish={setFinish}

          />}

        {/* console.log("final g1=>" + g1, "g2=>" + g2, "g3=>" + g3, "g4=>" + g4)  */}
      </div>
      <div className="question-space"></div>
      {
        i === 25 ? null : <Footer />
      }

    </div>
  );
}

export default App;
