import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {

    return (
        <Card title='Intervalo de Números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={props.min} onChange={e => props.onMinChanged(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={props.max} onChange={e => props.onMaxChanged(+e.target.value)}/> 
                </span>
            </div>
        </Card>
    )
}