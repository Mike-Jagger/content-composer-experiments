import React from "react";
import { FcBullish } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import {
	DASHBOARD_SIDEBAR_ROUTE_LINKS,
	DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants";

let linkClass =
	"flex flex-row items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function SidebarLink({ link }) {
	const { pathname } = useLocation();
	console.log(linkClass);
	return (
		<Link
			className={`${
				pathname === link.path
					? "bg-neutral-700 text-white"
					: "text-neutral-400"
			} + ${linkClass}`}
			to={link.path}
		>
			{link.icon}
			<span>{link.label}</span>
		</Link>
	);
}

const Sidebar = () => {
	return (
		<div className="flex flex-col bg-neutral-900 w-60 p-3">
			<div className="flex flex-row items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">OpenShop</span>
			</div>
			<div className="flex flex-col flex-1 gap-0.5">
				{DASHBOARD_SIDEBAR_ROUTE_LINKS.map((link) => {
					return <SidebarLink key={link.key} link={link} />;
				})}
			</div>
			<div>bottom links</div>
		</div>
	);
};

export default Sidebar;
