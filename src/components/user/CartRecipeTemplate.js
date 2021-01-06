import React, { useEffect, useState } from 'react'

function CartRecipeTemplate(props) {
    console.log(props)
    const [id ,setId] = useState(props._id)
    const [loading,setLoading] = useState(false)
    const [quantity,setQuantity] = useState(1)
    const buttonHandler = ()=>{
        
    }
    const addButton = () =>{
        if(quantity=== 10){
            return
        }
        setQuantity(quantity+1)
        props.order(id,quantity+1)
    }
    const removeButton = () =>{
        if(quantity <= 1){
            props.remove(props._id)
            setQuantity(quantity - 1)
            props.order(props._id, quantity - 1)
            return 
        }
        setQuantity(quantity-1)
        props.order(props._id,quantity-1)
        
    }
    useEffect(() => {
        props.order(id,1)
    })
    
    return (
        <div className='cart_recipe-template'>
            
            <div className="cart_recipe_template-img">
                <img src={props.image} alt='recipe'/>
            </div>
            
            <div className="cart_recipe_template-details">
                <div className='cart_recipe_template-details-text'>
                    <div style={{fontSize:'18px'}}>{props.name}</div>
                    <div> ₹ {props.price}</div>
                </div>
                <div className='quantity_controller'>
                    <div>
                        {props.category}
                    </div>
                    <div>
                        <button onClick={removeButton}>
                            <i class="fa fa-minus-square" aria-hidden="true"></i>
                        </button>
                        <button>{quantity}</button>
                        <button onClick={addButton}>
                            <i class="fa fa-plus-square" aria-hidden="true"></i>
                        </button>
                    </div>
                    

                </div>
            </div>
            <p></p>
            
        </div>
    )
}

export default CartRecipeTemplate
