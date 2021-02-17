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
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data.results });
			},
			getPlanets: async () => {
				const url = "https://swapi.dev/api/planet/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			}
		}
	};
};

export default getState;
