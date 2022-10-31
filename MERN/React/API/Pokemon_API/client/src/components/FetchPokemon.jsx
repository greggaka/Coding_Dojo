import React, { useState } from 'react';

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then ((response) => {
            return response.json();
        })
        .then ((response) => {
            setPokemon(response.results);
        })
        .catch ((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <h1>Pokemon List</h1>
            <button onClick={fetchData}>Fetch Pokemon</button>
            {
                pokemon.map((p, i) => {
                    return(
                        <div key={i}>
                            <h2>{p.name}</h2>
                        </div>
                    )
                    })
            }
        </div>
    )
}

export default FetchPokemon;
