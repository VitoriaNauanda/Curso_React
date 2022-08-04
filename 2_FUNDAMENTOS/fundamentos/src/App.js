//Components//
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

//Styles - CSS//
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
    </div>
  );
}

export default App;
