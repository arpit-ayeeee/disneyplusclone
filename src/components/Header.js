import React from 'react'
import styled from 'styled-components'

const Header = ()=>{
    return (
        <Nav>
            <Logo>
                <img src="images/logo.svg"></img>
            </Logo>
            <NavMenu>
                Menu
            </NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top:0;
    left:0;
    right:0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;
const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;
const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row no-wrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media(max-width: 768px){
        display: none;
    }
`;
export default Header


//Justify content, space-between, says the items inside the nav will be a equal distance from each other.
//If there are only two items, they'lll take the corner most positions