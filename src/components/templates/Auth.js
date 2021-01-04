import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Auth() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPassword] = useState('')
    useEffect(()=>{
        const signup = document.getElementById('signup');
        const login = document.getElementById('login')
        const container = document.getElementById('container')
        login.classList.add('glowing_btn')
        signup.addEventListener('click',()=>{
            container.classList.add('xxx')
            signup.classList.add('glowing_btn')
            login.classList.remove('glowing_btn')
        })
        login.addEventListener('click',()=>{
            container.classList.remove('xxx')
            login.classList.add('glowing_btn')
            signup.classList.remove('glowing_btn')
        })
    },[])
    return (
        <div>
            <div className="form_div">
                
                <div className="auth_form-header">
                    <button className='p-btn round' id='signup'>SignUp</button>
                    <button className='p-btn round' id='login'>Login</button>
                </div>
                <div className="form_container">
                    <div className="signup_form auth_form" id='container'>        
                        <input 
                            className='auth-input'
                            value={username}
                            type='text' 
                            name='username'
                            placeholder='Full Name'
                            required
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            value={email}
                            type='email' 
                            name='email'
                            placeholder='Email'
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            value={contact}
                            type='number' 
                            name='contact'
                            placeholder='Contact '
                            required
                            onChange={(e)=>setContact(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            value={password}
                            type='text' 
                            name='password'
                            placeholder='Password'
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button className='glow p-btn round ' >Sign Up</button>
                    </div>

                    <div className="auth_form login_form " id='container2' >
                        <input 
                            className='auth-input'
                            type='email' 
                            name='email'
                            placeholder='Email'
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            type='text' 
                            name='password'
                            placeholder='Password'
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Link to=''>Forget Password ?</Link>
                        <button className='p-btn round glow'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
