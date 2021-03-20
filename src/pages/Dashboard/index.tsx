import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import avatar from '../../assets/dois.jpg';

import {Container, Cabecalho, Corpo, Rodape} from './styles';
import documentos from '../../assets/paper.svg';
import loading from '../../assets/loading.svg';
import Order from './Order';
import e from '../../assets/e.svg';
import u from '../../assets/u.svg';

interface Solicitacao {
    nome: string;
    carteira: string;
    atendimento: string;
    idade: number;
    sexo: string;
    regulamentado: string;
    id: string;
    created_at: string;
    tipo: string;
    solicitante: string;

}

const Dashboard: React.FC = () => {
    
    const [solicitacao, setSolicitacao] = useState<Solicitacao[]>([]);

    useEffect(() => {
        buscarInfo()
    },  []);

    async function buscarInfo() {
        const response = await api.get('/solicitacao');
        const dataSolicitacao = response.data;
        console.log(dataSolicitacao);
        setSolicitacao(dataSolicitacao);

    };
    return (
        <Container>
            <Cabecalho>
                <div className="usuario">
                    <img src={avatar} alt="avatar" />
                    <h3>Igor Araujo Cruz</h3>
                </div>
                <h2>Internações Eletivas e Urgência</h2>
                <input type="text" placeholder="Pesquisar Prontuários" />
                <Order />
            </Cabecalho>
            <Corpo>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Atendimento</th>
                            <th>Carteira</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                            <th>Rg</th>
                            <th>Tipo</th>
                            <th>Solicitante</th>
                            <th>Data/Horário</th>
                            <th>Quarto</th>
                        </tr>
                    </thead>
                                            
                    <tbody>
                        {solicitacao.map(solicitacoes => (
                            <tr>
                                <td key={solicitacoes.id}>{solicitacoes.nome}<img src={documentos} alt="Documentos" /><img src={e} alt="Eletivos" /></td>
                                <td>{solicitacoes.atendimento}</td>
                                <td>{solicitacoes.carteira}</td>
                                <td>{solicitacoes.idade}</td>
                                <td>{solicitacoes.sexo}</td>
                                <td>{solicitacoes.regulamentado}</td>
                                <td>{solicitacoes.tipo}</td>
                                <td>{solicitacoes.solicitante}</td>
                                <td>{solicitacoes.created_at}</td>
                                <td><img className="loading" src={loading} alt="loading" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Corpo>
            <Rodape>

            </Rodape>
        </Container>
    )
};

export default Dashboard;