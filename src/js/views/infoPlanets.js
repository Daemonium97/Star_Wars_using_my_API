import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardBody } from "reactstrap";

export const InfoPlanets = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const e = store.planets[params.theid];
	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col>
					<Card>
						<Card.Img variant="top" src={e.img} />
					</Card>
				</Col>

				<Col>
					<Card style={{ width: "18rem" }}>
						<CardBody>
							<Card.Title>{e.name}</Card.Title>
							<Card.Text>Weather: {e.weather}</Card.Text>
							<Card.Text>Diameter: {e.diameter}</Card.Text>
							<Card.Text>Orbital : {e.orbital}</Card.Text>
						</CardBody>
					</Card>
					<Link to="/planets/go">
						<Button id="infoPlanetButton" variant="primary">
							Go back to Planets
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
