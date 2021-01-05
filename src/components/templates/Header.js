import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <div className='homepage_nav'>
            <div className="nav_logo">
                <h1>MAHAKAAL</h1>
            </div>
            <div className="nav_menus">
                <li className="nav_menu-items">
                    <NavLink to='/' activeClassName='active-menu-item' exact>Home</NavLink>
                </li>
                <li className="nav_menu-items">
                    <NavLink to='/menu' activeClassName='active-menu-item'>Menu</NavLink>
                </li>
                <li className="nav_menu-items">
                    <NavLink to='/offers' activeClassName='active-menu-item'>Offers</NavLink>
                </li>
                <li className="nav_menu-items">
                    
                    {props.user.isAuthenticated ? 
                        <Link to='/user/cart' ><i style={{fontSize: '30px'}} class="fa fa-shopping-cart">
                            {props.cart.length}</i>
                        </Link>:
                        <NavLink to='/login' activeClassName='active-menu-item'>Login</NavLink>} 
                    
                </li>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return state
}

export default connect(mapStateToProps) (Header)
