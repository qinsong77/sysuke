import * as React from 'react';
import logo from './logo.svg';
import co from './assets/coverage_html.png';
import './App.css';
import { Alert, Card, TextField, Button, MuiSimpleSnackbar } from 'rollup-react-component-library';
import 'rollup-react-component-library/dist/index.css';
import 'antd/dist/antd.css';
// import Button from "@com/Button";
// import { Affix } from 'antd';
// import { SimpleSnackbar } from '@sysuke/ui-components/es/SimpleSnackbar';
// import { Autocomplete } from '@sysuke/ui-components/es/Autocomplete';

// import 'antd/es/alert/style/index.css';
import './index.css';
import { Alert as FF } from 'antd';

// const Button = React.lazy(() => import(4/* webpackChunkName: "Button" */ './components/Button'));
const Header = React.lazy(() => import(/* webpackChunkName: "Header" */ './components/Header'));

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
      <Button text={'1212'} />
      <Alert />
      <Card />
      <TextField />
      <MuiSimpleSnackbar />
      <FF message={'alert'} />
      {/*<Affix>wtf</Affix>*/}
    </div>
  );
};

export default App;
