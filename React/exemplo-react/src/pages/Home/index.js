import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);

function handlePesquisa() { 
  axios.get(`https://api.github.com/users/${usuario}/repos`)
  .then(response => { 
    const repositories = response.data;
    const repositoriesName = [];
    repositories.map((repositories) => {
     return (repositoriesName.push(repositories.name));
    });
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    setErro(false);
    history.push('./repositories');
    })
    .catch(err => {
      setErro(true);
    });
}
  
  return ( 
    <S.HomeContainer>
      <S.Content>
        <S.Input className="user-input"
        placeholder="user" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type = "button" onClick={handlePesquisa} >Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMgs>Usuário não encontrado, tente novamente!</S.ErrorMgs> : null }      
    </S.HomeContainer>
  );
}

export default App;
