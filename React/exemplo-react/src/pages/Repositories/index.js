import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


function Repositories() {
    const history = useHistory();
    const [ repositories, setRepositories] = useState([]);

    useEffect(() => {
        
        let repositoriesName = localStorage.getItem('repositoriesName');
        
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName)
            localStorage.clear();
        } else {
            history.push('/')
        }

    }, []);
        

    const gohome = () => {
        history.push('/'); 
    };


    return (
        <S.Container>
        <S.Title>Repositories</S.Title>
        <S.List>
            { repositories.map(repository => {
                return (
                    // <S.ListItem key={repository.id}> 
                    <S.ListItem>
                        Repositório: { repository } 
                    </S.ListItem>
                )
            }) }
        </S.List>
        <S.LinkHome type="button" onClick={gohome}>Voltar</S.LinkHome>
        </S.Container>
    );
}

export default Repositories;