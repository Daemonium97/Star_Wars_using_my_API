import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";

export const InfoPlanets = props => {
	return (
		<Container className="d-flex justify-content-center">
			<Row>
				<Col md={3} className="mt-1 mb-2">
					{Array.from({ length: 1 }).map((_, index) => (
						<Card style={{ width: "18rem" }} key={index}>
							<Card.Img variant="top" src={props.image} />
							<Card.Body>
								<Card.Title>{props.title}</Card.Title>
								<Card.Text>{props.description}</Card.Text>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	);
};
InfoPlanets.propTypes = {
	title: PropTypes.any,
	description: PropTypes.any,
	image: PropTypes.any
};
