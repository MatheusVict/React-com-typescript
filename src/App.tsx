import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rotas from './app/routes';
import { UserlogProvider } from './app/context/Userlog';

function App() { // UserlogProvider  Tá compartilhando com tudo o seu elemento filho, nesse caso as rotas, ent posso acessar de onde eu quiser
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
