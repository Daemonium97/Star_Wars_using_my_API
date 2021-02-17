import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";

export const People = props => {
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
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to="/infoPeople/theid">
										<Button variant="primary">Go To</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(planet.name, "people")}>
										<Button variant="outline-warning">
											<i className="far fa-heart" />
										</Button>
									</Link>
								</ButtonToolbar>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

People.propTypes = {
	image: PropTypes.any,
	title: PropTypes.any,
	description: PropTypes.any
};
