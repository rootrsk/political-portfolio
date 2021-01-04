import React, { useState } from 'react'

function Recipe(props) {
    const [name, setName] = useState(props.name);
    const [category, setCategory] = useState(props.category)
    const [id, setId] = useState(props._id)
    const [time, setTime] = useState(props.cooking_time)
    const [rating, setRating] = useState(props.rating)
    const [veg,setVeg]  = useState(props.veg)
    const [price, setPrice] = useState(props.price)
    const [image, setImage] = useState(props.image)
    
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
                    <div className="t2 bold">{name}</div>
                    <div className="t6">{category} </div>
                </div>
                <div className="recipe_details-row3">
                    <button className="p-btn bold">View</button>
                    <button className="p-btn">Add</button>
                </div> 
            </div>
        </div>
    )
}

export default Recipe
