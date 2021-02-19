import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const InfoPlanets = props => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<Row>
				{store.planets.map((e, index) => {
					return (
						<Col key={index} md={3} className="mt-1 mb-1">
							<Card>
								<Card.Img
									variant="top"
									src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/08/Planet-with-Three-Suns-Discovered-Featured-image.jpg"
								/>
								<Card.Body>
									<Card.Title>{e.name}</Card.Title>
									<Card.Text>Rotation Period: {e.rotation_period}</Card.Text>
									<Card.Text>Orbital Period: {e.orbital_period}</Card.Text>
									<Card.Text>Diameter: {e.diameter}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

InfoPlanets.propTypes = {
	title: PropTypes.any,
	description: PropTypes.any,
	image: PropTypes.any
};
