import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rotas from './app/routes';
import { UserlogProvider } from './app/context/Userlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserlogProvider>
          <Rotas/>
        </UserlogProvider>
      </header>
    </div>
  );
}

export default App;
