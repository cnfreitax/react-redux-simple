import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Sorteio = props => {

  const {min, max} = props.numbers;
  const randomNumber = parseInt(Math.random() * (max -min) + min);

  return (
    <Card title="Sorteio de um número" purple>

      <div>
        <span>
          <strong>Resultado:</strong>
          <strong>{randomNumber}</strong>
        </span>

      </div>
      
    </Card>
  );
};

function mapSatateToProps(state) {
  return {
    numbers: state.numbers
  }
}

export default connect(mapSatateToProps) (Sorteio);