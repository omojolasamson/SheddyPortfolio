import React from 'react';
import styled from 'styled-components';
import mypic from "./mypic.png";

const HeaderWrap = styled.div`
    
`;

const HeaderLeft = styled.div`
    padding-left: 80px;
    padding-top: 60px;
    float: left;
`;

const HeaderRight = styled.div`
    padding-right: 55px;
    padding-top: 110px;
    float: right;
`;

const NameIntro = styled.p`
    color: #fff;
    font-weight: 750;
    font-size: 50px;
    font: futura;
    margin-bottom: 38px;
`;

const MyPicture = styled.img`
    width: 310px;
    height: 300px;
    margin-bottom: 14px;
    margin-top: 0px;
`;

const AboutMe = styled.p`
color: grey;
font-size: 13px;
`;

const Portfolio = styled.div`
  background-color: #202020;
  margin-bottom: 15px;
  width: 550px;
  height: 180px;
  color: white;
  padding-left: 80px;
  padding-top: 5px;
`;


const Portfoliotext1 = styled.p`
    letter-spacing: 3px;
    margin-bottom: 0px;
    color: #d4d4d4;
`;

const Portfoliotext2 = styled.p`
    font-weight: 600;
    font-size: 32px;
    margin-top: 4px;
    margin-bottom: 7px;
`;

const Portfoliotext3 = styled.p`
    margin-top: 0px;
    color: grey;
    font-size: 15px;
`;

const PortfolioRating = styled.span`
    color: grey;
    font-size: 13px;
`;

const PortfolioStar = styled.span`
    color: grey;
    font-size: 22px;
    font-weight: bolder;
`;


function Header() {
    return (

        <HeaderWrap>  
           <HeaderLeft>
                <NameIntro>Hello, I'm <br /> Akintayo Shedrack</NameIntro>
                <MyPicture src={mypic} />
                <AboutMe>I'm a Javascript nerd currently working as a <br /> Frontend Engineer for Reliance HMO. 
                I create logical and <br /> innovative solutions for businesses and I take pride in my work. <br />
                I also share what I learn on different blogs, meetups, <br /> podcasts, and conferences.</AboutMe>
            </HeaderLeft>

            <HeaderRight>
                <Portfolio>
                    <Portfoliotext1>
                            JAVASCRIPT
                    </Portfoliotext1>

                    <Portfoliotext2>
                            Ecommerce Plugin
                    </Portfoliotext2>

                    <Portfoliotext3>
                            A konga compatible plugin that converts and formats money
                    </Portfoliotext3>
                    <PortfolioRating><PortfolioStar>&#9733;</PortfolioStar>&nbsp; 23</PortfolioRating>
                        
                </Portfolio>
                <Portfolio>
                    <Portfoliotext1>
                            REACT
                    </Portfoliotext1>

                    <Portfoliotext2>
                            Tribula Web Store
                    </Portfoliotext2>

                    <Portfoliotext3>
                            Built a fully functional web application that stores local cash point
                    </Portfoliotext3>
                    <PortfolioRating><PortfolioStar>&#9733;</PortfolioStar>&nbsp; 10</PortfolioRating>
                </Portfolio>
                <Portfolio>
                    <Portfoliotext1>
                            GRAPH QL
                    </Portfoliotext1>

                    <Portfoliotext2>
                            Paystack API
                    </Portfoliotext2>

                    <Portfoliotext3>
                            Successfully built a Paystack Payment plugin using Apollo GraphQl
                    </Portfoliotext3>
                    <PortfolioRating><PortfolioStar>&#9733;</PortfolioStar>&nbsp; 10</PortfolioRating>
                </Portfolio>
           </HeaderRight>
        </HeaderWrap>    
        );
}
 
export default Header;