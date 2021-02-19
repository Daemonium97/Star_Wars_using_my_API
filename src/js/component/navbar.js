import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store, actions } = React.useContext(Context);

	return (
		<Navbar bg="dark" variant="dark">
			<Link to="/">
				<Navbar.Brand>
					<img src="https://img.icons8.com/color/64/000000/star-wars.png" />
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end mr-5">
				<DropdownButton drop={"left"} variant="dark" title={"Favorites"}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>
							Nothing here! <img src="https://img.icons8.com/cotton/26/000000/happy-skull--v2.png" />
						</Dropdown.Item>
					) : (
						store.favorites.map((fav, i) => {
							return (
								<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
									{fav.type == "people" ? (
										<div>
											<i className="fas fa-cat">
												&nbsp;
												{fav.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="fas fa-skull-crossbones" />
										</div>
									) : (
										<div>
											<i className="fas fa-cat">
												&nbsp;
												{fav.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="fas fa-skull-crossbones" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</Navbar.Collapse>
		</Navbar>
	);
};
