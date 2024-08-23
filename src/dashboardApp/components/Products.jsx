import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
	return (
		<>
			<p>Products</p>
			<Link to="/" className="underline">
				Go to dashboard
			</Link>
		</>
	);
};

export default Products;
