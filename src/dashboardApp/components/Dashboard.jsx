import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<>
			<p>Dashboard</p>
			<Link to="/products">Go to Products</Link>
		</>
	);
};

export default Dashboard;
