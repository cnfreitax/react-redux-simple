import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Soma = props => {

  const {min, max} = props.numbers

  return (
    <Card title="Soma dos números" blue>

      <div>
        <span>
          <strong>Resultado:</strong>
          <strong>{max + min}</strong>
        </span>

      </div>
      
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    numbers: state.numbers
  }
};

export default connect(mapStateToProps)(Soma);