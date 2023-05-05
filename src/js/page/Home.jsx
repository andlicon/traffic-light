import React from "react";

import Semaforo from '../component/Semaforo.jsx';

//create your first component
const Home = () => {
	const colores = [
		"red",
		"orange",
		"green"
	];

	return (
		<>
			<Semaforo 
				altoPx={400} 
				anchoPx={200} 
				luces={colores}
			/>
		</>
	);
};

export default Home;
