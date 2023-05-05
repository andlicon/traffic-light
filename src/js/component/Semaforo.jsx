import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/semaforo.css';

import Luz from './Luz.jsx';

const Semaforo = ({anchoPx, altoPx, luces}) => {
    const [widthPx, setWidthPx] = useState(anchoPx);
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
                style={{width: widthPx/10}}
            >
            </div>
            <div 
                className="semaforo"
                style={{width: widthPx}}
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
                <br />
                <input type="text" placeholder="width" onChange={ ({target}) => setWidthPx(Number.parseInt(target.value)) }/>
                <input type="text" placeholder="height" onChange={ ({target}) => setHeightPx(Number.parseInt(target.value)) }/>
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