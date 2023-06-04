(() => {
	const Utils = {
		settings: {
			backendBaseUrl: "https://pokeapi.co/api/v2",
		},
		getFormattedBackendUrl: ({ query, searchType }) => {
			return `${Utils.settings.backendBaseUrl}/${searchType}/${query}`;
		},
		getPokemon: ({ query, searchType = "pokemon" }) => {
			return Utils.fetch({
				url: Utils.getFormattedBackendUrl({ query, searchType }),
				searchType,
			});
		},
		fetch: async ({ url, searchType }) => {
			try {
				const rawResponse = await fetch(url);
				const response = await rawResponse.json();
				if (rawResponse.status !== 200) {
					throw new Error(`${searchType} not found`);
				}
				return response
			} catch (error) {
				throw error;
			}
		},
		getEvolutionChain: async url => {
			let arrSearch = Utils.getArraySearch(url);
			
			let { evolution_chain } = await Utils.getPokemon({ query: arrSearch[0], searchType: arrSearch[1] });
			arrSearch = Utils.getArraySearch(evolution_chain.url);
			console.log("arry"+arrSearch);

			let { chain } = await Utils.getPokemon({ query: arrSearch[0], searchType: arrSearch[1] })

			return Utils.getArrayEvolutionChain(chain);
	},
		getArraySearch: url => {
			const arrayUrl = url.split("/").slice(5, 7).reverse();
			console.log(url,arrayUrl);
			return arrayUrl;
		},
		getArrayEvolutionChain: ({ species, is_baby, evolves_to }) => {
			const evolutionChain = [];
			evolutionChain.push({ name: species.name, is_baby: is_baby });

			while (evolves_to.length > 0) {
				if (evolves_to.length > 1) {
					evolves_to.forEach(({ species, is_baby }) => {
						evolutionChain.push({ name: species.name, is_baby: is_baby });
					});
				} else {
					evolutionChain.push({ name: evolves_to[0].species.name, is_baby: evolves_to[0].is_baby });
				}
				evolves_to = evolves_to[0].evolves_to
			}
			return evolutionChain;
		},
	};
	document.Utils = Utils;
})();