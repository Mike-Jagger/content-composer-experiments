import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";

const DashboardApp = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="/invoices"
						element={<h1>This is the page to display invoices</h1>}
					/>
					<Route
						path="/dashboard"
						element={<h1>Welcome to your dashboard</h1>}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default DashboardApp;
