import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario ] = useState('');

  function handlePesquisa() { 
    axios.get(`https://api.github.com/users/${usuario}/repos`)
  }
  return ( 
    <>
    <input className="user-input"
    placeholder="user" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type = "button" onClick={handlePesquisa} >Pesquisar</button>
    </>
  );
}

export default App;