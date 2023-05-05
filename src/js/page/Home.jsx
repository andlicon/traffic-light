import React from "react";

import Semaforo from '../component/Semaforo.jsx';

//create your first component
const Home = () => {
	const luces = [
		'red',
		'orange',
		'green'
	];

	return (
		<>
			<Semaforo 
				altoPx={400} 
				anchoPx={200} 
				luces={luces}
			/>
		</>
	);
};

export default Home;
