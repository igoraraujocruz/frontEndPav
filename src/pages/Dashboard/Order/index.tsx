import React from 'react';

const Order:React.FC = () => {
    return (
        <form>
            <input type="text" placeholder="Nome do Paciente"/>
            <input type="text" placeholder="Atendimento"/>
            <input type="text" placeholder="Carteira"/>
        </form> 
    )
}

export default Order;