import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/semaforo.css';

import Luz from './Luz.jsx';

const Semaforo = ({anchoPx, altoPx, luces}) => {
    const [brilla, setBrilla] = useState(null);
    const [loop, setLoop] = useState(null);

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
            limpiarLoop();
            
            const color = target.style.backgroundColor;
            setBrilla(color);
        }
    };

    const limpiarLoop = () => {
        if(loop != null) {
            clearInterval(loop);
        }
    }

    async function alternarColores () {
        const timer = ms => new Promise(res => setTimeout(res, ms))

        for(let i=0; i<luces.length; i++) {
            setBrilla(luces[i]);
            await timer(1000);
        }
    }

    async function alternarHandler () {
        limpiarLoop();

        setLoop(setInterval( () => {
            alternarColores();
        }, 3000))
    };

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
            <div className="semaforoBotones">
                <button onClick={alternarHandler}>
                    Alternar
                </button>
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