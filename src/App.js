import './App.css';
import logo from "./img/logo.png"
import Button from "./Components/Button"
import Contador from "./Components/Contador"
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const clicControl = () => {
    setNumClics(numClics + 1);
  }

  const restart = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="cont-logo">
        <img
          className="logo"
          src={logo}
          alt="hola mundo"/>
      </div>
      <div className="cont-principal">
        <Contador
          numClics={numClics}/>
        <Button
          text="Clic"
          buttonClicTrue={true}
          clicControl={clicControl}/>
        <Button
          text="Restart"
          buttonClicTrue={false}
          clicControl={restart}/>
      </div>
    </div>
  );
}

export default App;
