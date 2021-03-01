import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
						/>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>{e.name}</Card.Title>
							<Card.Text>Age: {e.age}</Card.Text>
							<Card.Text>Hair Color: {e.hair_color}</Card.Text>
							<Card.Text>BirthYear: {e.birthday}</Card.Text>
							<Card.Text>Skin Color: {e.skin_color}</Card.Text>
						</Card.Body>
					</Card>
					<Link to="/people/ka">
						<Button id="infoPeopleButton" variant="primary">
							Go back to characters
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
