import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieApp.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=8744df25";

const testMovie = {
	Title: "Italian Spiderman",
	Year: "2007",
	imdbID: "tt2705436",
	Type: "movie",
	Poster: "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

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

			<div className="search">
				<input
					placeholder="Search for movies"
					value="Spiderman"
					onChange={() => {}}
				/>
				<img src={SearchIcon} alt="Search" onClick={() => {}} />
			</div>
			<div className="container">
				<MovieCard movieData={testMovie} />
			</div>
		</div>
	);
};

export default MovieApp;
