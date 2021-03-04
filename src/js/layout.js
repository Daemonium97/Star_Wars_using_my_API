import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Carrusel, Music } from "./views/home";

import injectContext, { Context } from "./store/appContext";

import { MyNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { InfoPeople } from "./views/infoPeople";
import { InfoPlanets } from "./views/infoPlanets";
import { Register } from "./views/register";
import { Login } from "./views/login";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Register />
						<Login />
					</Route>

					<Route exact path="/home">
						<MyNavbar />
						<Music />
						<Carrusel />
					</Route>
					<Route exact path="/people/:theid">
						<MyNavbar />
						<People data={store.people} />
					</Route>
					<Route exact path="/infoPeople/:theid">
						<MyNavbar />
						<InfoPeople data={store.people} />
					</Route>
					<Route exact path="/planets/:theid">
						<MyNavbar />
						<Planets data={store.planets} />
					</Route>
					<Route exact path="/infoPlanets/:theid">
						<MyNavbar />
						<InfoPlanets data={store.planets} />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
