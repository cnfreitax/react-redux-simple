import React from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';
import Card from './Card';

const Intervalo =  props => {

  const {max, min} = props.numbers;

  return (
    <Card title="Intervalo de números" red>

      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} readOnly/>
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly/>
        </span>
      </div>

    </Card>
  );
};

function mapStateToProps(state) {
  return {
    numbers: state.numbers
  }
}

export default connect(mapStateToProps) (Intervalo)

