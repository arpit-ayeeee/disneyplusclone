import React from 'react'
import styled from 'styled-components'      //Styled components provide styled component tags, which we need not to make a css file for

const Login = (props)=>{
    return (
        <Container>
            <Content>Content</Content>
        </Container>
    );
};


//This is how we'll design the styled components, we'll give them name by ourselves, and the define theor properties below
//Container will have the whole viewport except the header
const Container = styled.section`
    overflow: hidden; 
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
`;
//And Content will have the center login part
const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;   
    display: flex;   
    flex-direction: column;           
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

export default Login


//Align items, put the items will that div in center vertically
//Justify content, put the content in that div in center horizontally