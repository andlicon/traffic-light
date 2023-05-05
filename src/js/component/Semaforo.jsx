import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/semaforo.css';

const Semaforo = props => {
    const estilosSemaforo = {
        width: props.anchoPx,
        height: props.altoPx
    };
    const estilosTop = {
        width: props.anchoPx/10,
        height: props.altoPx/5
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
            </div>
        </div>
    );
};
Semaforo.propTypes = { 
    anchoPx: PropTypes.number, // Unidad a usar: pixel
    altoPx: PropTypes.number // Unidad a usar: pixel
};
export default Semaforo;