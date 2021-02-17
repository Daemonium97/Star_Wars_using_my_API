import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export const InfoPlanets = props => {
	<div className="container">
		<div>
			<img
				src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/11/27/16065165259290.jpg"
				width="400"
				height="400"
			/>
		</div>
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	</div>;
};
