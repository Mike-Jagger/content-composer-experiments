import React from "react";

const MovieCard = ({ movieData }) => {
	return (
		<div className="movie">
			<div>
				<p>{movieData.Title}</p>
			</div>

			<div>
				<img
					src={
						movieData.Poster !== "N/A"
							? movieData.Poster
							: "https://via.placeholder.com/400"
					}
					alt={movieData.Title}
				/>
			</div>

			<div>
				<span>{movieData.Type}</span>
				<h3>{movieData.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
