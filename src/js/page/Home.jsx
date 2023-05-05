import React from "react";

import Semaforo from '../component/Semaforo.jsx';

//create your first component
const Home = () => {
	return (
		<>
			<Semaforo alto={400} ancho={200} />
		</>
	);
};

export default Home;
