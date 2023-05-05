import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/semaforo.css';

import Luz from './Luz.jsx';

const Semaforo = ({anchoPx, lucesInput}) => {
    const [luces, setLuces] = useState(lucesInput);
    const [brilla, setBrilla] = useState(null);
    const [loop, setLoop] = useState(null);

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
        const tiempoColor = 1000;   

        for(let i=0; i<luces.length; i++) {
            setBrilla(luces[i]);
            await timer(tiempoColor);
        }
    }

    async function alternarHandler () {
        const tiempoVuelta = luces.length * 1000;
        limpiarLoop();

        alternarColores();
        setLoop(setInterval( () => {
            alternarColores();
        }, tiempoVuelta))
    };

    return(
        <div className='semaforo-container'>
            <div 
                className="semaforoTop"
                style={{width: anchoPx/10}}
            >
            </div>
            <div 
                className="semaforo"
                style={{width: anchoPx}}
                onClick={semaforoHandler}
            >
                {
                    luces.map( (color, index) => {
                        console.log(luces);
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
                <button onClick={
                    ()=>setLuces( (!luces.includes('purple'))  ? [...luces, 'purple'] : luces)
                }>
                    Morado
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