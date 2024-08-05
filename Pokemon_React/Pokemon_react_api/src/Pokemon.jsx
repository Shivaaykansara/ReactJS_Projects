import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=102";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const pokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedPokemonData = await Promise.all(pokemonData);
      console.log(detailedPokemonData);
      setPokemon(detailedPokemonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon)=>curPokemon.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <section className="contanier">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input type="text" placeholder="search Pokemon" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((curPokemon) => {
              return (
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
