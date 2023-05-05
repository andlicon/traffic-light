import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/semaforo.css';

import Luz from './Luz.jsx';

const Semaforo = ({anchoPx, altoPx, luces}) => {
    const estilosSemaforo = {
        width: anchoPx,
        height: altoPx
    };
    const estilosTop = {
        width: anchoPx/10,
        height: altoPx/5
    };

    return(
        <div className='semaforo-container'>
            <div 
                className="semaforoTop"
                style={estilosTop}
            >
            </div>
            <div 
                className="semaforo"
                style={estilosSemaforo}
            >
                {
                    luces.map( (color, index) => {
                        return(
                            <Luz key={index} color={color} />
                        )
                    })
                }
            </div>
        </div>
    );
};
Semaforo.propTypes = { 
    anchoPx: PropTypes.number, // Unidad a usar: pixel
    altoPx: PropTypes.number, // Unidad a usar: pixel
    luces : PropTypes.array
};
export default Semaforo;