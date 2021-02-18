import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { setStore, actions } = React.useContext(Context);

	return (
		// <nav className="navbar navbar-dark bg-dark mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">
		// 			<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
		// 		</span>
		// 	</Link>
		// 	<div className="ml-auto">

		// 			<button className="btn btn-primary">
		// 				Favorites <img src="https://img.icons8.com/fluent/25/000000/pixel-heart.png" />
		// 			</button>

		// 	</div>
		// </nav>

		<Navbar bg="dark" variant="dark">
			<Link to="/">
				<Navbar.Brand>
					<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					<DropdownButton className="dropdown-basic-button" title="Favorites" />
					{setStore.favorites}
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};
