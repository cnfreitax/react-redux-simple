import React from 'react';
import './Intervalo.css';
import Card from './Card';

export default props => {

  return (
    <Card title="Intervalo de números" red>

      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={10}/>
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10}/>
        </span>
      </div>

    </Card>
  )
}