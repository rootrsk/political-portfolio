import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
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
        if(response.data.status==='success'){
            setRecipes(response.data.data.recipes)
        } else{
            getRecipes()
        }
    }
    useEffect(() => {
        getRecipes()
    });
    return (
        <>
            <Header />
            <div className='menu'>
                {
                    recipes.map((recipe)=>{
                        return <Recipe {...recipe} key={recipe._id} />
                    })
                }
            </div>
            <Footer />
        </>
        
    )
}

export default Menu
