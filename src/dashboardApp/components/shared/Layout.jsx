import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<h1>This is the main page</h1>} />
				<Route
					path="/invoices"
					element={<h1>This is the page to display invoices</h1>}
				/>
				<Route
					path="/dashboard"
					element={<h1>Welcome to your dashboard</h1>}
				/>
			</Routes>
		</Router>
	);
};

export default Layout;
