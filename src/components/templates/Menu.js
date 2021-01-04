import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Recipe from './Recipe'
const URL = 'https://mahakaal-api.herokuapp.com'
function Menu() {
    const [recipes, setRecipes] = useState([])
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const getRecipes = async () => {
        setStatus('loading...')
        const response = await axios({
            url: `${URL}/recipes`,
            method: 'GET'
        })
        setStatus('')
        setError('')
        console.log(response)
    }
    useEffect(() => {
        getRecipes()
        return () => {

        };
    }, []);
    return (
        <>
            <Header />
            <div className='menu'>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </>
        
    )
}

export default Menu
