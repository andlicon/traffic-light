import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../../styles/luz.css';

const Luz = props => {
    const [color, setColor] = useState(props.color);
    const [activado, setActivado] = useState(false);

    return(
        <div 
            className="luz"
            style={{backgroundColor: color}}
        >
        </div>
    );
};
export default Luz;