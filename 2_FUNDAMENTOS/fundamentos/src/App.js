//Components//
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
//Styles - CSS//
import './App.css';

// Função Principal //
function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
