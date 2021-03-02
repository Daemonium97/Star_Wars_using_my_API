import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();
	return (
		<Container fluid>
			<Row>
				{props.data.map((elem, index) => {
					return (
						<Col key={index} md={3} className="mt-1 mb-1">
							<Card>
								<Card.Img variant="top" src={elem.img} />
								<Card.Body>
									<Card.Title>{elem.name}</Card.Title>

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
