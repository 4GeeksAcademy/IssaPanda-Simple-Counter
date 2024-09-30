import React, { useState, useEffect } from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

		const [counter, setCounter] = useState(0);

		useEffect(() => {
			const interval = setInterval(() => {
			  setCounter(prevCounter => prevCounter + 1);
			}, 1000);
			return () => clearInterval(interval);
		  }, []);

		  const counterStr = counter.toString().padStart(6, '0');

	return (
		<div className="counter-container">
		  {counterStr.split('').map((digit, index) => (
			<div key={index} className="digit">
			  {digit}
			</div>
		  ))}
		</div>
	  );
};

export default Home;
