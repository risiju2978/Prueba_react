import React, { useEffect, useState } from 'react'
import Body from '../components/Body'
import { NavBar } from '../components/navbar'
import { Loading } from '../components/Loading'
import { getPokemon } from '../services/pokemon.service'
import { Ability, DataPokemon } from '../interfaces/pokemon.interface'

export type style = 'dark' | 'light'

export const App = () => {
    const [type, setType] = useState<style>('dark')
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [pokemonToSearch, setPokemonToSearch] = useState<string>('')
    const [abilities,setabilities] = useState<Ability[]>()
    const add = () => setCount(count + 1)
    const remove = () => setCount(count - 1)

//metodo para conseguir objeto de pokemon en  proceso de hacerlo
    const datoPokemon = async () =>{
        setLoading(true)
        try{
            const respuesta  = (await getPokemon(pokemonToSearch.toLowerCase())).data
            const { abilities} = respuesta as DataPokemon
            setabilities(abilities)
            console.log(respuesta)
        } catch (error) {
            console.error(error)
        }

        setLoading(false)


    }



    const getDataAsync = async () => {
        setLoading(true)
        try {
            const response = await getPokemon(pokemonToSearch.toLowerCase())
            console.log(response)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
        console.log(`POKEMON TO SEARCH: ${pokemonToSearch}`)
        setLoading(false)
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonToSearch(event.target.value)
    }

    const handleSearch = () => {
        getDataAsync()
        datoPokemon()
    }

    return (
        <div>
            <NavBar setStyle={setType} />
            {
                loading ? <Loading /> : (
                    <>
                        <input type='text' onChange={handleChange} />
                        <button onClick={handleSearch}>Search</button>
                    	 
                        <pre>
                            {
                                abilities?.map(({ability}) => {
                                    return(
                                        <p>
                                            {ability.name}
                                        </p>
                                    )
                                })
                            }
                        </pre>
                    </>
                )
            }

        </div>
    )
}