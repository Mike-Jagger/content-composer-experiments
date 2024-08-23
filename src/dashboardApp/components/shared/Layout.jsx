import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

const Layout = () => {
	const { pathname } = useLocation();
	const pathsWithHeader = ["/"];

	return (
		<div className="h-screen w-screen overflow-hidden bg-neutral-100 flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				{pathsWithHeader.includes(pathname) ? <Searchbar /> : null}
				<div>{<Outlet />}</div>
			</div>
		</div>
	);
};

export default Layout;
