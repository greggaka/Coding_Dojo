import React, { useState } from 'react';
import axios from 'axios';

const PokemonFetch = () => {
    const [pokemon, setPokemon] = useState([]);
    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response)=> {
            setPokemon(response.data.results)})
        .catch((err) => {
            console.log(err)
        }) 
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={fetchData}>Get Pokemon List</button>
            {
                pokemon.map((pokemon, i) => {
                    return (
                        <div key={i}>
                            <h2>{pokemon.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PokemonFetch;