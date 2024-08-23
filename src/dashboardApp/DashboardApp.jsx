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
					<Route index element={<Dashboard />} />
					<Route path="/products" element={<Products />} />
				</Route>
				<Route path="/login" element={<p>Login page</p>} />
			</Routes>
		</Router>
	);
};

export default DashboardApp;
