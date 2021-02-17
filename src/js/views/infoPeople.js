import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";

export const InfoPeople = props => {
	return (
		<Container>
			<Row>
				<Col md={3} className="mt-1 mb-2">
					{Array.from({ length: 10 }).map((_, index) => (
						<Card style={{ width: "18rem" }} key={index}>
							<Card.Img variant="top" src={props.image} />
							<Card.Body>
								<Card.Title>{props.title}</Card.Title>
								<Card.Text>{props.subtitle}</Card.Text>
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to="/infoPeople/theid">
										<Button variant="primary">Get info</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(planet.name, "people")}>
										<Button variant="outline-warning">
											<i className="far fa-heart" />
										</Button>
									</Link>
								</ButtonToolbar>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	);
};

InfoPeople.propTypes = {
	title: PropTypes.any,
	subtitle: PropTypes.any,
	image: PropTypes.any
};
