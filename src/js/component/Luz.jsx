import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../../styles/luz.css';

const Luz = ({ color, brilla }) => {
    return(
        <div 
            className={`luz ${brilla ? 'selected' : ''}`}
            style={{backgroundColor: color}}
        >
        </div>
    );
};
export default Luz;