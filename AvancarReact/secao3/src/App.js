
import './App.css';
import Cidade from './assets/cidade.png';
//Componentes//
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  
  const [userName] = useState("Maria")
  const cars = [
    {id: 1, brand:"Ferrari", color: "Amerala", newCar: true, km:0},
    {id: 2, brand:"KIA", color: "Branco", newCar: false, km:34000},
    {id: 3, brand:"Renault", color: "Azul", newCar: false, km:234}
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
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
    </div>

  );
}

export default App;
