import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import ReactAudioPlayer from "react-audio-player";

export const Music = () => {
	return (
		<Iframe
			id="music"
			width="100%"
			height="315"
			src="https://www.youtube.com/embed/pilqN-Q_2Vw?controls=0&amp;start=28"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	);
};

export const Carrusel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<Link to="/people/ka">
					<img
						className="d-block w-200"
						src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2016/09/10StarkillerBase.jpeg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Characters</h3>
						<p>Jedi, Sith, Rebels</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to="/planets/go">
					<img
						className="d-block w-100"
						src="https://pyxis.nymag.com/v1/imgs/043/29d/3cd1f3bd82677f9456b4209407822e487d-bespin.2x.w710.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Planets</h3>
						<p>Where are you from?</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	);
};
