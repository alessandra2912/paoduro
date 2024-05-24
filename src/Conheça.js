import React from 'react';
import './Conheça.css';
import ImagemConheça from './imagemconheça.png'

const Conheça = () => {
  return (
    <div className="container">
      <div className="imagem">
        <img src={ImagemConheça} alt="imagem-padaria" className="imagemconheça" />
      </div>
      <div className="texto">
        <h1>Conheça a nossa Padaria</h1>
        <h2>Endereço:</h2>
        <p>Shopping Barra - 1º Piso - Praça de Alimentação. Av. Centenário, 2992 - Chame-Chame. Salvador-BA</p>
        <h2>Telefone(s):</h2>
        <p>(71) 3033-4455 / (71) 1122-5890</p>
        <h2>Horário de Funcionamento:</h2>
        <p>Segunda à Sábado: 9h às 22h. Domingo: 12h às 20h</p>
      </div>
    </div>
  );
};

export default Conheça;
