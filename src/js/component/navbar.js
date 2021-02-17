import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">
						Favorites <img src="https://img.icons8.com/fluent/25/000000/pixel-heart.png" />
					</button>
				</Link>
			</div>
		</nav>
	);
};
