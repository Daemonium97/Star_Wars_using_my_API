import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Carrusel } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/people";
import { Planets } from "./component/planets";
import { InfoPeople } from "./views/infoPeople";
import { InfoPlanets } from "./views/infoPlanets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Carrusel />
					</Route>

					<Route exact path="/people/:theid">
						<div className="card-deck d-flex justify-content-center">
							<People
								title="Pedro"
								subtitle="Juega de muerto"
								image="https://pbs.twimg.com/media/EWzpD8oXgAEb45H.jpg"
							/>
						</div>
					</Route>
					<Route exact path="/infoPeople/:theid">
						<InfoPeople
							title="Pedro"
							subtitle="Juega de muerto"
							image="https://pbs.twimg.com/media/EWzpD8oXgAEb45H.jpg"
						/>
					</Route>
					<Route exact path="/planets/:theid">
						<Planets
							title="Tatuine"
							subtitle="sfsaddfsda"
							image="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
						/>
					</Route>

					<Route exact path="/infoPlanets/theid">
						<InfoPlanets />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
