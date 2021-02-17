import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Planets = props => {
	return (
		<Container fluid>
			<Row>
				{Array.from({ length: 10 }).map((_, index) => (
					<Col key={index} md={3} className="mt-1 mb-1">
						<Card>
							<Card.Img variant="top" src={props.image} />
							<Card.Body>
								<Card.Title>{props.title}</Card.Title>
								<Card.Text>{props.description}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Link to="/infoPlanets/:theid">
									<Button variant="primary">Go to the force</Button>
								</Link>
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

Planets.propTypes = {
	image: PropTypes.any,
	title: PropTypes.any,
	description: PropTypes.any
};
