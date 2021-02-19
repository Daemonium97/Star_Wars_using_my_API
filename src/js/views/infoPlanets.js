import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoPlanets = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const e = store.planets[params.theid];
	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col>
					<Card>
						<Card.Img
							variant="top"
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
						/>
					</Card>
				</Col>

				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Title>{e.name}</Card.Title>
						<Card.Text>Rotation Period: {e.rotation_period}</Card.Text>
						<Card.Text>Orbital Period: {e.orbital_period}</Card.Text>
						<Card.Text>
							Diameter:
							{e.diameter}
						</Card.Text>
						<Card.Text>Climate: {e.climate}</Card.Text>
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
