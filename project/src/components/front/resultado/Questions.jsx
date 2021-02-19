import React, { useState, useEffect } from "react"
import "./questions.css"
import End from "../End/End"
import Footer from "../Footer/Footer"






function App() {

  const questions = [
    {//1
      a: {
        question: "Prudent and thoughtful\n",
        groupe: 4
      },
      b: {
        question: "Loyal and attentive to others \n",
        groupe: 3
      }

      ,
      c: {
        question: "Influential and demonstrativef\n",
        groupe: 2
      },
      d: {
        question: "Strategic and enterprising\n",
        groupe: 1
      }
    }

    ,
    {//2
      a: {
        question: "Sociable and friendly\n",
        groupe: 2
      },
      b: {
        question: "Honest and discreet \n",
        groupe: 3
      },
      c: {
        question: "Energetic and results-oriented\n",
        groupe: 1
      },
      d: {
        question: "Methodical and logical\n",
        groupe: 4
      }
    },
    {//3
      a: {
        question: "Self-confident and volunteer\n",
        groupe: 3
      },
      b: {
        question: "Orderly and concise\n",
        groupe: 1
      },
      c: {
        question: "Confortable and stable\n",
        groupe: 2
      },
      d: {
        question: "Formaliste and factual\n",
        groupe: 4
      }
    },
    {//4
      a: {
        question: "Insightful and impartiale\n",
        groupe: 1
      },
      b: {
        question: "Demanding and direct\n",
        groupe: 4
      },
      c: {
        question: "Consistent and committed to values\n",
        groupe: 3
      },
      d: {
        question: "Active and binder\n",
        groupe: 2
      }
    },
    {//5
      a: {
        question: " Accommodating and helpful\n",
        groupe: 4
      },
      b: {
        question: "Hopeful and expressive\n",
        groupe: 1
      },
      c: {
        question: " Puissant and sure of yourself\n",
        groupe: 3
      },
      d: {
        question: "Pensif and self-control\n",
        groupe: 2
      }
    },
    {//6
      a: {
        question: "Open and persuasive\n",
        groupe: 3
      },
      b: {
        question: "Applied and selective in your relationships\n",
        groupe: 2
      },
      c: {
        question: "Firm and enterprising\n",
        groupe: 1
      },
      d: {
        question: " Posed and analytical\n",
        groupe: 4
      }
    },
    {//7
      a: {
        question: "Determined and Resolved\n",
        groupe: 2
      },
      b: {
        question: "Jovial and charming\n",
        groupe: 3
      },
      c: {
        question: "Sensitive and friendly\n",
        groupe: 1
      },
      d: {
        question: "Logical and correct\n",
        groupe: 4
      }
    },
    {//8
      a: {
        question: "Compassionate and diplomatic\n",
        groupe: 1
      },
      b: {
        question: " Accurate and measured\n",
        groupe: 2
      },
      c: {
        question: "Encouraging and open to ideas\n",
        groupe: 3
      },
      d: {
        question: "Results-oriented and fast-paced\n",
        groupe: 4
      }
    },
    {//9
      a: {
        question: " Responsible and firm\n",
        groupe: 3
      },
      b: {
        question: "Reserved and cooperative\n",
        groupe: 4
      },
      c: {
        question: " Expansive and imaginative\n",
        groupe: 2
      },
      d: {
        question: "Meticulous and detail-oriented\n",
        groupe: 1
      }
    },
    {//10
      a: {
        question: "Team spirit and spontaneity\n",
        groupe: 1
      },
      b: {
        question: " Controlled and rationaln",
        groupe: 3
      },
      c: {
        question: "Friendly and considerate\n",
        groupe: 2
      },
      d: {
        question: "Persistent and result-oriented\n",
        groupe: 4
      }
    },


    //New 
    {//11
      a: {
        question: "  Analytical and Skeptic\n",
        groupe: 2
      },
      b: {
        question: " Friendly and entertaining\n",
        groupe: 3
      },
      c: {
        question: "Demanding and firm\n",
        groupe: 3
      },
      d: {
        question: "Modest and faithful\n",
        groupe: 4
      }
    },
    {//12
      a: {
        question: "Attached to your loved ones and calm\n",
        groupe: 4
      },
      b: {
        question: "Affectionate and confident\n",
        groupe: 2
      },
      c: {
        question: "Observant and distant\n",
        groupe: 1
      },
      d: {
        question: " Active and controlling\n",
        groupe: 3
      }
    },
    {//13
      a: {
        question: " Voluntary and tenacious\n",
        groupe: 3
      },
      b: {
        question: "  Compliant and unbiased\n",
        groupe: 2
      },
      c: {
        question: " Watchful and remote\n",
        groupe: 4
      },
      d: {
        question: "  Operating and controlling\n",
        groupe: 1
      }
    },
    {//14
      a: {
        question: " Formal and stick to your principles\n",
        groupe: 1
      },
      b: {
        question: "Jovial and popular\n",
        groupe: 4
      },
      c: {
        question: "Moderating and soothing\n",
        groupe: 2
      },
      d: {
        question: "Firm and sharp\n",
        groupe: 3
      }
    },
    {//15
      a: {
        question: " Animated and persuasive\n",
        groupe: 4
      },
      b: {
        question: " Decision maker and hurried\n",
        groupe: 2
      },
      c: {
        question: " Analytical and discipline-loving\n",
        groupe: 3
      },
      d: {
        question: " Tolerant and calm\n",
        groupe: 1
      }
    },

    {//16
      a: {
        question: "Patient and emphatic\n",
        groupe: 2
      },
      b: {
        question: " Logical and measured\n",
        groupe: 1
      },
      c: {
        question: "Result-oriented and ready for a challenge\n",
        groupe: 4
      },
      d: {
        question: "Open to ideas and accommodating\n",
        groupe: 3
      }
    },
    {//17
      a: {
        question: "Influential and relaxed\n",
        groupe: 3
      },
      b: {
        question: "Discreet and philosophical\n",
        groupe: 4
      },
      c: {
        question: "Thoughtful and circumspect\n",
        groupe: 1
      },
      d: {
        question: " Persistent and determined\n",
        groupe: 2
      }
    },
    {//18
      a: {
        question: "  Procedure-oriented and well-prepared\n",
        groupe: 2
      },
      b: {
        question: "Courageous and autonomous\n",
        groupe: 3
      },
      c: {
        question: "Extroverted and communicative\n",
        groupe: 4
      },
      d: {
        question: "Caring and give supportive advice\n",
        groupe: 1
      }
    },
    {//19
      a: {
        question: "Powerful and clear\n",
        groupe: 4
      },
      b: {
        question: "Spontaneous and lively \n",
        groupe: 1
      },
      c: {
        question: " Studious and reasoned\n",
        groupe: 2
      },
      d: {
        question: " Peaceful and harmonious\n",
        groupe: 3
      }
    },
    {//20
      a: {
        question: "Organized and prudent\n",
        groupe: 1
      },
      b: {
        question: "Patient and helpful\n",
        groupe: 2
      },
      c: {
        question: "  Argumentative and self-confident\n",
        groupe: 4
      },
      d: {
        question: " Interactive and open\n",
        groupe: 3
      }
    },
    {//21
      a: {
        question: "Independent and daring\n",
        groupe: 4
      },
      b: {
        question: "Flexible and harmonious\n",
        groupe: 3
      },
      c: {
        question: "  Factual and standard compliant\n",
        groupe: 1
      },
      d: {
        question: " Friendly and lively\n",
        groupe: 2
      }
    },
    {//22
      a: {
        question: "  Demonstrative and enthusiastic\n",
        groupe: 1
      },
      b: {
        question: "Direct and realistic\n",
        groupe: 3
      },
      c: {
        question: "  Compassionate and considerate\n",
        groupe: 4
      },
      d: {
        question: " Focus and attention to detailn",
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

            <h3>You are rather ...…</h3>

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
              { rouge: "RED", points: g1 },
              { jaune: "YELLOW", points: g2 },
              { vert: "GREEB", points: g3 },
              { blue: "BLUE", points: g4 }
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
