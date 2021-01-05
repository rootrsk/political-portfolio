import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Auth from './Auth'
import CircularLoader from './CircularLoader'
import Footer from './Footer'
import Header from './Header'
import Recipe from './Recipe'
const URL = 'https://mahakaal-api.herokuapp.com'
function Menu(props) {
    console.log(props)
    const [recipes, setRecipes] = useState([])
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const [open,setOpen] = useState(false)
    const isAuthenticated = () =>{
        if(props.user.isAuthenticated){
            return true
        } else{
            setOpen(true)
        }
    }
    
    const getRecipes = async () => {
        setStatus('loading...')
        const response = await axios({
            url: `${URL}/recipes`,
            method: 'GET'
        })
        if(response.data.status==='success'){
            setRecipes(response.data.data.recipes)
            props.dispatch({
                type:'SET_RECIPES',
                recipes: response.data.data.recipes
            })
        } else{
            getRecipes()
            
        }
    }
    const openHadler = (status) =>{
        console.log(status)
        setOpen(status)
    }
    useEffect(() => {
        if(props.recipes.length === 0){
            getRecipes()
        } else{
            setRecipes(props.recipes)
        }
        
    },[props]);
    return (
        <>
            <Header />
            <CircularLoader />
            {open &&
                <div style={{
                    position:'absolute',
                    top:'0px',
                    width:'100%',
                }}>
                    <Auth open={openHadler}/>
                </div>
            }
            
            <div className='menu'>
                {
                    recipes.map((recipe)=>{
                        return <Recipe {...recipe} key={recipe._id} open={openHadler} />
                    })
                }
            </div>
            <Footer />
        </>
        
    )
}

const mapStateToProps = (state) =>{
    return state
} 

export default connect(mapStateToProps)(Menu)
