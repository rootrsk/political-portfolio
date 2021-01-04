import React, { useState } from 'react'
// import vegImg from '../../assets/img/veg.png'
const vegImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png'
const nonVegImg = 'https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png'

function Recipe(props) {
    const [name] = useState(props.name);
    const [category] = useState(props.category)
    const [id] = useState(props._id)
    const [time] = useState(props.cooking_time)
    const [rating] = useState(props.rating)
    const [veg]  = useState(props.veg)
    const [price] = useState(props.price)
    const [image] = useState(props.image)
    const add_to_cart = async() =>{
        if(true){
            console.log(`Item ${id} Added to Cart.`)
        }
    }
    
    return (
        <div className='recipe-template'>
            <div className="recipe-img">
                <img 
                    src={image} 
                    alt='recipe'
                />
            </div>
            <div className="recipe_details">
                <div className="recipe_details-row1">
                    <li>☆ {rating} </li>
                    <li>{time} Mins</li>
                    <li>₹ {price}</li>
                </div>
                <div className="recipe_details-row2">
                    <div className="t2 bold">
                        <img src={veg?vegImg:nonVegImg} style={{width:'20px',height:'20px',marginRight:'3px'}} alt='veg/non-veg' />   
                         {name}
                    </div>
                    <div className="t6">{category} </div>
                </div>
                <div className="recipe_details-row3">
                    <button className="p-btn bold">View</button>
                    <button className="p-btn" onClick={()=>add_to_cart()}>Add</button>
                </div> 
            </div>
        </div>
    )
}

export default Recipe
