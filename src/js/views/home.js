import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const Carrusel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<Link to="/people" />
				<img
					className="d-block w-100"
					src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2016/09/10StarkillerBase.jpeg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Characters</h3>
					<p>Jedi, Sith, Rebels</p>
				</Carousel.Caption>
				<Link to="/people" />
			</Carousel.Item>
			<Carousel.Item>
				<Link to="/planets" />
				<img
					className="d-block w-100"
					src="https://pyxis.nymag.com/v1/imgs/043/29d/3cd1f3bd82677f9456b4209407822e487d-bespin.2x.w710.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Planets</h3>
					<p>Where are you from?</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
