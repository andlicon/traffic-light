import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/semaforo.css';

const Semaforo = props => {
    const estilosSemaforo = {
        width: props.ancho,
        height: props.alto
    };
    const estilosTop = {
        width: props.ancho/10,
        height: props.alto/5
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
    width: PropTypes.string, // El numero + su unidad (ejemplo): 300px
    height: PropTypes.string // El numero + su unidad (ejemplo): 300px
};
export default Semaforo;