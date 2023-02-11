import logo from "./logo.svg";
import "./App.scss";
import { DefaultButton } from "@components/common/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DefaultButton label="dsfsd" />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>dfsfsdf</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
