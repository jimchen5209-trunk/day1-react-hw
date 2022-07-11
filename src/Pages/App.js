import logo from '../Assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          按下右上角按鈕以繼續
        </p>
      </header>
    </div>
  );
}

export default App;
