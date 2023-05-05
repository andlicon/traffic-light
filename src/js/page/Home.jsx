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
				anchoPx={200} 
				lucesInput={luces}
			/>
		</>
	);
};

export default Home;
