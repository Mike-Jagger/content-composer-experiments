import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

const Layout = () => {
	return (
		<div className="h-screen w-screen overflow-hidden bg-neutral-100 flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<Searchbar />
				<div>{<Outlet />}</div>
			</div>
		</div>
	);
};

export default Layout;
