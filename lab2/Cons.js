const getPokemonId = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    return data.id;
  };
  
  const pokemonId = await getPokemonId('pikachu');
  console.log(pokemonId);