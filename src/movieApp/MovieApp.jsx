import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieApp.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=8744df25";

// const testMovie = {
// 	Title: "Italian Spiderman",
// 	Year: "2007",
// 	imdbID: "tt2705436",
// 	Type: "movie",
// 	Poster: "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
// };

const MovieApp = () => {
	// const [requestCount, setRequestCount] = useState(0);
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);

		const data = await response.json();

		setMovies(data.Search);
	};

	return (
		<div className="app">
			<h1>Movie App</h1>

			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt="Search"
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>

			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie) => {
						return <MovieCard movieData={movie} />;
					})}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found</h2>
				</div>
			)}

			<div className="container"></div>
		</div>
	);
};

export default MovieApp;
