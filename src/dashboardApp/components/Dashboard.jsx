import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<>
			<p>Dashboard</p>
			<Link to="/products" className="underline">
				Go to Products
			</Link>
		</>
	);
};

export default Dashboard;
