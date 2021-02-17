import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Carrusel } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/people";
import { Planets } from "./component/planets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Carrusel />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/people/:theid">
							<div className="card-deck d-flex justify-content-center">
								<People
									title="Pedro"
									subtitle="Juega de muerto"
									image="https://pbs.twimg.com/media/EWzpD8oXgAEb45H.jpg"
								/>
								<People
									title="An"
									subtitle="Juega carritos"
									image="https://pbs.twimg.com/media/EWzpD8oXgAEb45H.jpg"
								/>
								<People
									title=" Anakin SkyWalker"
									subtitle="Juega Jedi"
									image="https://i2.wp.com/wipy.tv/wp-content/uploads/2020/10/anakin-skywalker-si-era-el-elegido.jpg?fit=1000%2C600&ssl=1"
								/>
								<People
									title=" Anakin SkyWalker"
									subtitle="Juega Jedi"
									image="https://i2.wp.com/wipy.tv/wp-content/uploads/2020/10/anakin-skywalker-si-era-el-elegido.jpg?fit=1000%2C600&ssl=1"
								/>
								<People
									title=" Anakin SkyWalker"
									subtitle="Juega Jedi"
									image="https://i2.wp.com/wipy.tv/wp-content/uploads/2020/10/anakin-skywalker-si-era-el-elegido.jpg?fit=1000%2C600&ssl=1"
								/>
							</div>
						</Route>
						<Route exact path="/planets/:theid">
							<Planets
								title="Tatuine"
								subtitle="sfsaddfsda"
								image="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
							/>
							<Planets
								title="Casita"
								subtitle="sfsaddfsda"
								image="https://hipertextual.com/files/2013/05/Rodaje-de-Tatooine-Star-Wars-Episodio-I.jpg"
							/>
							<Planets
								title="OAAA"
								subtitle="sfsaddfsda"
								image="https://i.pinimg.com/originals/d2/a9/25/d2a92586f37fec00c39dc780b1716d38.png"
							/>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
