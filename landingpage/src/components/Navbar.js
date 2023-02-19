import React from 'react'
import { Nav,Logo,Menu,Item } from '../styles/Navbar.styled';

export const Navbar = () => {
  return (
    <Nav>
        <Logo>Trends</Logo>
        <Menu>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Products</Item>
        </Menu>
        <Menu>
            <Item>Cart</Item>
        </Menu>
    </Nav>
  )
}
