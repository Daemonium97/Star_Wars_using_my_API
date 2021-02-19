import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const InfoPeople = props => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<Row>
				{store.people.map((e, index) => {
					return (
						<Col key={index} md={3} className="mt-1 mb-1">
							<Card>
								<Card.Img
									variant="top"
									src="https://www.orlandosentinel.com/resizer/OhxcxUlLIH0dlcwMZuSne-5hI5o=/1200x0/top/www.trbimg.com/img-52cda019/turbine/os-greatest-star-wars-characters-pictures"
								/>
								<Card.Body>
									<Card.Title>{e.name}</Card.Title>
									<Card.Text>
										Birthday:
										{e.birth_year}
									</Card.Text>
									<Card.Text>Hair Color: {e.hair_color}</Card.Text>
									<Card.Text>Eyes color: {e.eye_color}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

InfoPeople.propTypes = {
	image: PropTypes.any,
	data: PropTypes.any
};
