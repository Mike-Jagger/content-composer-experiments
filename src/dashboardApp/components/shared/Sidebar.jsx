import React from "react";
import { FcBullish } from "react-icons/fc";

const Sidebar = () => {
	return (
		<div className="flex flex-col bg-neutral-900 w-60 p-3">
			<div className="flex flex-row items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">OpenShop</span>
			</div>
			<div>routes</div>
			<div>bottom links</div>
		</div>
	);
};

export default Sidebar;
