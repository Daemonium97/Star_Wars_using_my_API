import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";

export const People = props => {
	return (
		<Container fluid>
			<Row>
				{Array.from({ length: 10 }).map((_, index) => (
					<Col key={index} md={3} className="mt-1 mb-1">
						<Card>
							<Card.Img
								variant="top"
								src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/11/27/16065165259290.jpg"
							/>

							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural lead in to additional
									content. This content is a little bit longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Link to="/InfoPeople">
									<Button variant="primary">Go to the force</Button>
								</Link>
							</Card.Footer>
						</Card>
					</Col>
				))}
				;
			</Row>
		</Container>
	);
};

People.propTypes = {
	image: PropTypes.any,
	title: PropTypes.any,
	subtitle: PropTypes.any
};
