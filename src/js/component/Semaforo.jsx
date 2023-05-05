import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/semaforo.css';

import Luz from './Luz.jsx';

const Semaforo = ({anchoPx, altoPx, luces}) => {
    const [brilla, setBrilla] = useState(null);

    const tamanoSemaforo = {
        width: anchoPx,
        height: altoPx
    };
    const tamanoTop = {
        width: anchoPx/10,
        height: altoPx/5
    };

    const semaforoHandler = ({ target }) => {
        if(target.className.includes('luz')) {
            const color = target.style.backgroundColor;
            setBrilla(color);
        }
    }

    return(
        <div className='semaforo-container'>
            <div 
                className="semaforoTop"
                style={tamanoTop}
            >
            </div>
            <div 
                className="semaforo"
                style={tamanoSemaforo}
                onClick={semaforoHandler}
            >
                {
                    luces.map( (color, index) => {
                        return(
                            <Luz 
                                key={index} 
                                color={color}
                                brilla={brilla==color}
                            />
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