import { Theme } from "./contexts";
import { Logo } from "./components";

import "./index.css";

function App() {
  return (
    <Theme.Provider initial="dark">
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Logo />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Theme.Select />
        </header>
      </div>
    </Theme.Provider>
  );
}

export default App;
