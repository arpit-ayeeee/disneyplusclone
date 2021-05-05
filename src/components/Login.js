import React from 'react'
import styled from 'styled-components'      //Styled components provide styled component tags, which we need not to make a css file for

const Login = (props)=>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="images/cta-logo-one.svg" alt=""></CTALogoOne>
                    <Signup>GET ALL THERE</Signup>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
                            with a Disney+ subscription. As of 03/26/21, the price of Disney+
                            and The Disney Bundle will increase by 100 INR.
                    </Description>
                    <CTALogoTwo src="images/cta-logo-two.png" alt=""></CTALogoTwo>
                </CTA>
                <BgImage/>
            </Content>
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
//Content will have the center login part
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
//This will be the whole background images
const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-image: url("/images/login-background.jpg");  
    position: absolute;
    top:0;
    right: 0;
    left:0;
    z-index:-1;
`;
//CTA will have the whole centered content
const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;

`;
//This will be the first logo
const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width:100%;
`;
//Signup Button
const Signup = styled.a`
    font-weight: bold;
    color: white;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;
    }
`;
//For the written description
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 14px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;
//For logo two
const CTALogoTwo =styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;
export default Login


//Align items, put the items will that div in center vertically
//Justify content, put the content in that div in center horizontally
//Background-size: cover allows the picture to cover the whole viewport, and utilize the whole image
//Z-index is negative, so to tell that this image has a very low priorty and will be at back always.
//So by default, everythng will have a z-index higher than the bgimage, so everything will be above it