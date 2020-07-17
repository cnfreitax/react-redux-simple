import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Media = props => {

  const { min, max } = props.numbers;

  return (
    <Card title="Média dos números" green>

      <div>
        <span>
          <strong style={{marginRight: "5px"}}>Resultado:</strong>
          <strong>{( max + min )/2 }</strong>
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

export default connect(mapStateToProps) (Media);