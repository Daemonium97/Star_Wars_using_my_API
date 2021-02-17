import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export const People = props => {
	return (
		<div className="card">
			<Card>
				<Card.Img variant="top" src={props.image} width="400" height="400" />
				<Card.Body width="500" height="500">
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.subtitle}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

People.propTypes = {
	image: PropTypes.any,
	title: PropTypes.any,
	subtitle: PropTypes.any
};
