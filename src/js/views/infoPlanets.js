import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const InfoPlanets = props => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState();
	return (
		<Container className="d-flex justify-content-center">
			<Row>
				<Col md={3} className="mt-1 mb-2">
					{store.people.map((e, index) => (
						<Card style={{ width: "18rem" }} key={index}>
							<Card.Img variant="top" src={props.image} />
							<Card.Body>
								<Card.Title>{e.name}</Card.Title>
								<Card.Text>
									<p>
										<strong>Gender:</strong>
										<span>{e.gender}</span>
									</p>
									<p>
										<strong>Hair-color:</strong>
										<span>{e.hair_color}</span>
									</p>
									<p>
										<strong>Eye-color:</strong>
										<span>{e.eye_color}</span>
									</p>
								</Card.Text>
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
