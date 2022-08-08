
import './App.css';
import Cidade from './assets/cidade.png';
//Componentes//
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';

function App() {
  const name = "Vitória"
  const [userName] = useState("Maria")
  return (
    <div className="App">
      <h1 > Tarefa 3: Desafio sobre criação de apps em React</h1>
      {/*Imagem em public*/}
      <div> 
        <img src="\images.jpg" alt="borboleta" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img src={Cidade} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name= {userName}/>
    </div>

  );
}

export default App;
