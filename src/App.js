import logo from './logo.svg';
import './App.css';
import Fruit from './components/fruit';
import Orange from './components/orange';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is my first commit</p>
        <p>This is my second commit</p>
        <p>This is my third commit</p>
        <Fruit />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
