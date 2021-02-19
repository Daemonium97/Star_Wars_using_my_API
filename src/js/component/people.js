import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);
	const { searchItem, setSearch } = useState();
	return (
		<Container fluid>
			<Row>
				{props.data.map((elem, index) => {
					return (
						<Col key={index} md={3} className="mt-1 mb-1">
							<Card>
								<Card.Img
									variant="top"
									src="https://www.orlandosentinel.com/resizer/OhxcxUlLIH0dlcwMZuSne-5hI5o=/1200x0/top/www.trbimg.com/img-52cda019/turbine/os-greatest-star-wars-characters-pictures"
								/>
								<Card.Body>
									<Card.Title>{elem.name}</Card.Title>

									<ButtonToolbar
										className="justify-content-between d-flex"
										aria-label="Toolbar with Button groups">
										<Link to={`/infoPeople/${index}`}>
											<Button variant="primary">Go To The Force</Button>
										</Link>
										<Link onClick={() => actions.addFavorite(elem.name, "people")}>
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
