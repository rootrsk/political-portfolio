import React from 'react'

function Recipe(props) {
    
    return (
        <div className='recipe-template'>
            <div className="recipe-img">
                <img 
                    src='https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg' 
                    alt='pizza'
                />
            </div>
            <div className="recipe_details">
                <div className="recipe_details-row1">
                    <li>☆ 3.9</li>
                    <li>40 Mins</li>
                    <li>₹ 200</li>
                </div>
                <div className="recipe_details-row2">
                    <div className="t2 bold">Dishes Name</div>
                    <div className="t6"> Category</div>
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
