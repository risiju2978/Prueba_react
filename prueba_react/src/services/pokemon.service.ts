import axios from 'axios';

export const getPokemon = (name: string) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

