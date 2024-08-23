import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<div className="sidebar">This is a sidebar</div>
			<div className="searchbar">This is a searchbar</div>
			<div>{<Outlet />}</div>
		</div>
	);
};

export default Layout;
