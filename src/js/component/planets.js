import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Planets = props => {
	return (
		// <div className="Card-deck">
		//     <Card>
		//         <Card.Img variant="top" src={props.image} />
		//         <Card.Body>
		//             <Card.Title>{props.title}</Card.Title>
		//             <Card.Text>{props.subtitle}</Card.Text>
		//         </Card.Body>
		//     </Card>
		// </div>

		<Container>
			<Row>
				<Col xs={6} md={4}>
					<Card>
						<Card.Img variant="top" src={props.image} />
						<Card.Body>
							<Card.Title>{props.title}</Card.Title>
							<Card.Text>{props.subtitle}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

Planets.propTypes = {
	image: PropTypes.any,
	title: PropTypes.any,
	subtitle: PropTypes.any
};
