import logo from './logo.svg';
import './App.css';
import Cidade from './assets/cidade.png';
//Componentes//
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
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
    </div>

  );
}

export default App;
