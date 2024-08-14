import { useState, useEffect } from "react";
import "./MovieApp.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=8744df25";

const MovieApp = () => {
	// const [requestCount, setRequestCount] = useState(0);

	const searchMovies = async (title) => {
		// setRequestCount(requestCount + 1);

		const response = await fetch(`${API_URL}&s=${title}`);

		const data = await response.json();

		console.log(data.Search);
	};

	useEffect(() => {
		// searchMovies("spiderman");
	}, []);

	return (
		<div className="app">
			<h1>Movie App</h1>
			{/* <p style={{ color: "white" }}>{requestCount}</p> */}
		</div>
	);
};

export default MovieApp;
