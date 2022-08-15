import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react"
function App() {
  const n = 15
  const [name] = useState("Matheus")
  return (
    <div className="App">
      {/*CSS global */}
      <h1>React com CSS</h1>
      {/*CSS de componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/*Inline css */}
      <p style={{color:"magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color:"magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/*Inline dinamico */}
      <h2 style={n < 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS dinamico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS dinamico</h2>
      <h2 style={name === "Matheus" ? ({color:"green", backgroundColor: "#000"}) : null}>Teste nome</h2>
      <h2 style={name === "Joao" ? ({color:"green", backgroundColor: "#000"}) : null}>Teste nome</h2>
    </div>
  );
}

export default App;
