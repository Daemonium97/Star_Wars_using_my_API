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
							<Card.Img
								variant="top"
								src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
							/>
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Button variant="primary">Go to the force</Button>
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
	subtitle: PropTypes.any
};
