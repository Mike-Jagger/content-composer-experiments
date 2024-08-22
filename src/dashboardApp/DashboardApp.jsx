import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";

const DashboardApp = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/invoice" index={true} element={<Invoice />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default DashboardApp;
