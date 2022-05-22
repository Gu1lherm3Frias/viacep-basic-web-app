import './App.css';
import { Button  } from 'react-bootstrap';
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const queryCPF = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => {
      result.json().then(data => {
        document.getElementById("App-content-box").innerHTML = JSON.stringify(data, null, 4);
      });
    }).catch(err => {
      console.log(err)
      alert(err);
    })
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          ViaCEP
        </h1>
      </div>
      <div className="App-main">
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="set a CEP"/>
        <Button variant='primary' onClick={() => queryCPF(inputText)}>Click me</Button>

        <div id="App-content-box"></div>
      </div>
    </div>
  );
}

export default App;
