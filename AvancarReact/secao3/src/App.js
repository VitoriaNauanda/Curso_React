
import './App.css';
import Cidade from './assets/cidade.png';
//Componentes//
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import {useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFuncao from './components/ExecuteFuncao';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  
  const [userName] = useState("Maria")
  const cars = [
    {id: 1, brand:"Ferrari", color: "Amerala", newCar: true, km:0},
    {id: 2, brand:"KIA", color: "Branco", newCar: false, km:34000},
    {id: 3, brand:"Renault", color: "Azul", newCar: false, km:234}
  ]
  function showMessage() {
    console.log("Evento do componente pai!")
  }
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }
  const pessoaDado = [
    {id: 0, nome: "Olívia", idade: 16, profissao: "Técnica em Informática"},
    {id: 1, nome: "Maria", idade: 36, profissao: "Professora"},
    {id: 2, nome: "Isadora", idade: 19, profissao: "Costureira"},
  ]

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
      {/*props*/}
      <ShowUserName name= {userName}/>
      {/*Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando*/ }
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos*/}
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      {/*Fragment*/}
      <Fragment propFragment="Teste"/>
      {/*Children*/ }
      <Container MyValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container MyValue="Testing2">
        <h5>Testando o container</h5>
      </Container>
      {/*Executar função */}
      <ExecuteFuncao myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState hMessage={handleMessage} />
      {pessoaDado.map((dado)=>(
        <UserDetails key={dado.id} nome={dado.nome} idade={dado.idade} profissao={dado.profissao} carteira={dado.idade >= 18 ?(<div> <p> Permitido tirar habilitação</p></div>):(<div><p>Não é permitido tirar habilitação</p></div>)}/>
      ))}
    </div>

  );
}

export default App;
