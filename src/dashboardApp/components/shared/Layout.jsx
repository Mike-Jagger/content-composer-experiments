import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<div className="bg-sky-100">This is a sidebar</div>
			<div className="bg-sky-200">This is a searchbar</div>
			<div>{<Outlet />}</div>
		</div>
	);
};

export default Layout;
