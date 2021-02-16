import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import PropTypes from "prop-types";

const items = [
	{
		src: "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2016/09/10StarkillerBase.jpeg",
		header: "Characters",
		key: "1"
	},
	{
		src: "https://pyxis.nymag.com/v1/imgs/043/29d/3cd1f3bd82677f9456b4209407822e487d-bespin.2x.w710.jpg",
		header: "Planets",
		key: "2"
	}
];

export const Carrusel = () => <UncontrolledCarousel items={items} />;

UncontrolledCarousel.propTypes = {
	items: PropTypes.array.isRequired,
	indicators: PropTypes.bool, // default: true
	controls: PropTypes.bool, // default: true
	autoPlay: PropTypes.bool // default: true
};
