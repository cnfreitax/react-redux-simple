import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';
import Card from './Card';

import { alteredMinNumber, alteredMaxNumber } from '../store/actions/numbersActionsCreator';

const Intervalo =  props => {

  const {max, min} = props.numbers;

  const handleAlterMinNumber = useCallback((number) => {
    props.alterMinNumber(number)
  },[props])

  return (
    <Card title="Intervalo de números" red>

      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min}
            onChange={e => handleAlterMinNumber(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} 
            onChange={e => props.alterMaxNumber(+e.target.value)}
          />
        </span>
      </div>

    </Card>
  );
};

function mapStateToProps(state) {
  return {
    numbers: state.numbers
  };
};

function mapDispatchToProps(dispatch) {
  return {
    alterMinNumber(number) {
      //action creator retuns an action
      const action = alteredMinNumber(number);

      dispatch(action);
    },
    alterMaxNumber(number) {
      //action creator retuns an action
      const action = alteredMaxNumber(number);

      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps, // Map state to props
  mapDispatchToProps // map action creator to props
  )(Intervalo)

