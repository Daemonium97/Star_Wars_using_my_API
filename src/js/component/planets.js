import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";

export const Planets = props => {
	return (
		<Container fluid>
			<Row>
				{props.data.map((elem, index) => {
					return (
						<Col key={index} md={3} className="mt-1 mb-1">
							<Card>
								<Card.Img
									variant="top"
									src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/08/Planet-with-Three-Suns-Discovered-Featured-image.jpg"
								/>
								<Card.Body>
									<Card.Title>{elem.name}</Card.Title>
									<Card.Text>Population: {elem.population}</Card.Text>
									<Card.Text>Climate: {elem.climate}</Card.Text>
									<ButtonToolbar
										className="justify-content-between d-flex"
										aria-label="Toolbar with Button groups">
										<Link to={`/infoPlanets/${index}`}>
											<Button variant="primary">Go To</Button>
										</Link>
										<Link onClick={() => actions.addFavorite(elem.name, "planet")}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

Planets.propTypes = {
	image: PropTypes.any,
	data: PropTypes.any
};
