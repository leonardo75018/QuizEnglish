import { useState, useEffect } from 'react'
import Header from "./components/front/Header/Header"
import Start from "./components/front/Start/Start"
import Footer from "./components/front/Footer/Footer"
import Questions from "./components/front/resultado/Questions"
// import Profils from "./components/front/profils/pr"



import "./App.css"

function App() {

  const [step, setStep] = useState(1);
  const [activeQuestion, SetActiveQuestion] = useState(0);

  const quizStartHandler = () => {
    setStep(2);
  }



  return (
    <div className="App">
      <div className="main">
        <Header />



        {step === 1 && <Start quizStartHandler={quizStartHandler} />}
        {step === 2 && <Questions />
        }

        {/* <Footer /> */}

      </div>
    </div>
  );
}

export default App;
