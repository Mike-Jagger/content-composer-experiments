import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

const Layout = () => {
	return (
		<div>
			<Sidebar />
			<div>
				<Searchbar />
				<div>{<Outlet />}</div>
			</div>
		</div>
	);
};

export default Layout;
