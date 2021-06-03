import React from 'react'
import styled from 'styled-components'

const Header = ()=>{
    return (
        <Nav>
            <Logo>
                <img src="images/logo.svg" alt="Disney+ "></img>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a href="/home">
                    <img src="images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src="images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/home">
                    <img src="images/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/home">
                    <img src="images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a href="/home">
                    <img src="images/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login>Login</Login>
        </Nav>
    )
}
//Navbar 
const Nav = styled.nav`
    position: fixed;
    top:0;
    left:0;
    right:0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;         //Justify content, space-between, says the items inside the nav will be a equal distance from each other.
    align-items: center;
    padding: 0 36px;
    letter-spacing: 14px;
    z-index: 3;
`;

//LOGO css
const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 0px;
    max-height: 70px;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

//NavMenu
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
    margin-left: 30px;
    margin-top: 10px;

    //A tags inside navmenu
    a{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 12px;
        
        img{
            height: 22px;
            min-width: 22px;
            width: 22px;
            z-index:auto;
            margin-right: 3px;
        }
        span{
            color: rgb(249,249,249);
            font-size:15px;
            letter-spacing: 1.45px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;

            //UNDERLINE HOVER OVER SPANS
            //So now to get the line below the span when hovered,we'll make an invisible line, which shows up with transition, when the cursor hovers over it.
            &:before{
                background-color: rgb(249,249,249);      
                content:"";                         //We'll take a blank div
                border-radius: 0px 0px 4px 4px;     //Give only the bottom border 
                bottom: -6px;                       //Move it down, so it comes below span
                right: 0px;
                left: 0px;
                height: 2px;
                opacity: 0;                         //And we'll make it invisible for now
                position: absolute;
                transform-origin: left center;
                transform: scaleX(0);               //So that line wont show directly, if 1 line will come directly
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;//This will give the motion transition
                visibility: hidden;                 //Hidden now, when hovered the works
                width: auto;
            }
        }
        //Span LINE hover behaviour activation
        &:hover{                                    
            span:before{
                transform: scaleX(1);               //Here one, so line will come with motion like from 0 to 100%
                visibility: visible;
                opacity:1 !important;               //When hovered then only visible
            }
        }
    }
    @media(max-width: 768px){
        display: none;
    }
`;

//Login Button On Right
const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;                //When hovered

    &:hover{                                    //On hover
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`; 

export default Header



//If there are only two items, they'lll take the corner most positions