import { array } from "prop-types";
import shortid from "shortid";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

			planets: [],

			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getPeople: async () => {
				const url = "https://3000-magenta-anaconda-rxjnjahq.ws-us03.gitpod.io/people";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data });
			},
			getPlanets: async () => {
				const url = "https://3000-magenta-anaconda-rxjnjahq.ws-us03.gitpod.io/planets";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},

			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
