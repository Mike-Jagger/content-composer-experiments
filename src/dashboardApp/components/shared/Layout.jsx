import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<div className="sidebar"></div>
			<div className="searchbar"></div>
			<div className="content">{Outlet}</div>
		</div>
	);
};

export default Layout;
