import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const signOutBlockRight = {
  position: 'absolute',
  right: '10px'
}
const changePasswordBlockRight = {
  position: 'absolute',
  right: '100px'
}

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/poems' className='nav-link'>My Poems</NavLink>
    <NavLink to='/poems/create' className='nav-link'>Create</NavLink>
    <NavLink to='/change-password' style={changePasswordBlockRight} className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' style={signOutBlockRight} className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}> &#60;30 </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>{(user.email.substring(0,user.email.indexOf('@')))} </span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
