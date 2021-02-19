import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const InfoPeople = props => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const e = store.people[params.theid];
	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col>
					<Card>
						<Card.Img
							variant="top"
							src="https://sm.ign.com/t/ign_za/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_uxzr.1080.jpg"
						/>
					</Card>
				</Col>

				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Title>{e.name}</Card.Title>
						<Card.Text>Height: {e.height}</Card.Text>
						<Card.Text>Hair Color: {e.hair_color}</Card.Text>
						<Card.Text>
							Eye Color:
							{e.eye_color}
						</Card.Text>
						<Card.Text>Gender: {e.gender}</Card.Text>
						<Card.Text>Birth Year: {e.birth_year}</Card.Text>
					</Card>
					<Link to="/people/ka">
						<Button id="infoPeopleButton" variant="primary">
							Go back to Planets
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
