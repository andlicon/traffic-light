import React from "react";

import Semaforo from '../component/Semaforo.jsx';

//create your first component
const Home = () => {
	return (
		<>
			<Semaforo altoPx={400} anchoPx={200} />
		</>
	);
};

export default Home;
