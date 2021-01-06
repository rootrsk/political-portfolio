import React, { useState } from 'react'

function RecipeForm(props) {
    const [name, setName] = useState(props.name);
    const [category, setCategory] = useState(props.category)
    const [id, setId] = useState(props._id)
    const [cooking_time, setTime] = useState(props.cooking_time)
    const [rating, setRating] = useState(props.rating)
    const [veg, setVeg] = useState(props.veg)
    const [price, setPrice] = useState(props.price)
    const [image, setImage] = useState(props.image)
    return (
        <div>
            <div className="admin_form">
                <form>
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Recipe Name'
                            required
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Cooking Time'
                            required
                            onChange={(e)=>setTime(e.target.value)}
                    />
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Recipe Name'
                            required
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Recipe Name'
                            required
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Recipe Name'
                            required
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Recipe Name'
                            required
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                            className='auth-input'
                            value={name}
                            type='text' 
                            name='name'
                            placeholder='Recipe Name'
                            required
                            onChange={(e)=>setName(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default RecipeForm
