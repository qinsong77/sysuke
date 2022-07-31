import * as React from 'react';
import logo from './logo.svg';
import co from './assets/coverage_html.png';
import './App.css';

const Button = React.lazy(
  () => import(/* webpackChunkName: "Button" */ './components/Button')
);
const Header = React.lazy(
  () => import(/* webpackChunkName: "Header" */ './components/Header')
);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <img
          src={co}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Header />
      <Button />
    </div>
  );
};

export default App;
