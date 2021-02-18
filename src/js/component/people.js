import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const People = props => {
	return (
		<Container fluid>
			<Row>
				{props.data.map((elem, index) => {
					return (
						<Col key={index} md={3} className="mt-1 mb-1">
							<Card>
								<Card.Img
									variant="top"
									src="https://wipy.tv/wp-content/uploads/2020/02/Luke-Skywalker-se-iba-a-llamar-Luke-Starkiller-2.jpg"
								/>
								<Card.Body>
									<Card.Title>{elem.name}</Card.Title>

									<ButtonToolbar
										className="justify-content-between d-flex"
										aria-label="Toolbar with Button groups">
										<Link to="/infoPeople/:theid">
											<Button variant="primary">Go To The Force</Button>
										</Link>
										<Link onClick={() => actions.arrayFavorite(people.name, "people")}>
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

People.propTypes = {
	image: PropTypes.any,
	data: PropTypes.any
};
