import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

const DashboardApp = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/dashboard" index element={<Dashboard />} />
					<Route path="/Products" element={<Products />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default DashboardApp;
