import "./MovieApp.css";
import SearchIcon from "./search.svg";

const fetchMovies = async (movieName) => {
	const response = await fetch({
		url: "http://www.omdbapi.com/?i=tt3896198&apikey=8744df25",
	});
};

const MovieApp = () => {
	return <h1>Movie App</h1>;
};

export default MovieApp;
