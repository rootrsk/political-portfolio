import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import CartRecipeTemplate from './CartRecipeTemplate'
const URL = 'https://mahakaal-api.herokuapp.com'
function Cart(props) {
    const order = {

    }
    const orderHandler = (id,count) =>{
        console.log(id,count)
        order[id] = count
        console.log(order)
    }
    const removeRecipe = async(id) =>{
        const response = await axios({
            url: `${URL}/cart/remove`,
            method: 'POST',
            data: {
                user_id: props.user._id,
                recipe_id: id
            }
        })
        console.log(response.data)
    }
    
    return (
        <div>
            
            {
                props.cart.map((recipe)=>{
                    return <CartRecipeTemplate {...recipe} remove={removeRecipe} order={orderHandler} key={recipe._id} />
                })
            }
            <div>
                <button className='p-btn'>Order Now</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (Cart)
