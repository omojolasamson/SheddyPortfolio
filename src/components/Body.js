import React from 'react';
import styled from 'styled-components';


const BodyWrap = styled.div`
    clear: both;
    padding-top: 200px;
`;

const BodyLeft = styled.div`
    
    float: left; 
    margin-right: 0px;
    padding-right: 0px;
    margin-left: 65px;
`;

const BodyRight = styled.div`
    
    float: right;
    margin-right: 100px;
    margin-left: 0px;
    padding-left: 0px;
`;

const ArticlesColumn1 = styled.div`
    
    padding-top: 0px;
    float: left;
`;

const ArticlesColumn2 = styled.div`
    
    padding-left: 20px;
    padding-top: 20px;
    float: right;
`;

const Category = styled.p`
    
    font-weight: 500;
    font-size: 29px;
    color: #fff;
    margin-top: 0px;
    padiing-top: 0px;
`;

const Article = styled.div`
    background-color: #202020;
    width: 250px;
    height: 300px;
    padding-left: 40px;
    padding-top: 15px;
    border: solid 1px #585858;
    margin-bottom: 50px;
`;

const ArticleText1 = styled.p`
    
    color: #d4d4d4;
    margin-bottom: 1px;
`;

const ArticleText2 = styled.p`
    color: grey;
    font-size: 12px;
    margin-bottom: 100px;
`;

const ArticleText3 = styled.p`
    font-weight: 600;
    color: white;
    font-size: 18px;
`;

const ArticleText4 = styled.span`
    
    margin-top: 0px;
    color: grey;
    font-size: 12px;
`;

const ExternalLink = styled.span`
    
    color: white;
    font-size: 12px;
    font-weight: bold;
`;

const Social = styled.div`
    clear: both;
    color: #fff;
    font-size: 21px;
    margin-top: 100px;
    margin-bottom: 80px;
`;




const PlayIcon = styled.span`
    
    color: #202020;
    font-size: 170px;
    font-weight: bold;
    text-shadow: -1px 0 #585858, 0 1px #585858, 1px 0 #585858, 0 -1px #585858;
    float: 
    margin-top: 0px;
    padding-top: 0px;
    margin-left: 
`;

const TalkRow = styled.div`
    
`;

const Talk = styled.span`
    margin-top: 70px;
    margin-left: 5px;
    float: right;
`;

const Topic = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #d4d4d4;
    margin-left: 60px;
    
`;

const Origin = styled.span`
    font-size: 20px;
    color: #585858;
    margin-bottom: 12px;
    margin-left: 60px;
    
`;

const Date = styled.span`
    
    color: #d4d4d4;
    margin-left: 60px;
`;

const Category2 = styled.p`
    
    font-weight: 500;
    font-size: 29px;
    color: #fff;
    margin-top: 0px;
    padiing-top: 0px;
    margin-left: 40px;
`;


function Body() {
    return (

        <BodyWrap>
           <BodyLeft>
                
                <ArticlesColumn1>
                    <Category>Blogs</Category>
                    <Article>
                        <ArticleText1>Frontstack io Lagos</ArticleText1>
                        <ArticleText2>Lagos -- Nigeria <br /> March 25, 2019</ArticleText2>
                        <ArticleText3>Angular vs React? <br /> Make your choice</ArticleText3>
                        <ArticleText4>Article &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                    </Article>

                    <Article>
                        <ArticleText1>Frontstack io Lagos</ArticleText1>
                        <ArticleText2>Lagos -- Nigeria <br /> March 25, 2019</ArticleText2>
                        <ArticleText3>The Future of JAMSTACK  <br /> In Africa</ArticleText3>
                        <ArticleText4>Article &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                    </Article>

                    <Article>
                        <ArticleText1>Frontstack io Lagos</ArticleText1>
                        <ArticleText2>Lagos -- Nigeria <br /> March 25, 2019</ArticleText2>
                        <ArticleText3>Angular vs React? <br /> Make your choice</ArticleText3>
                        <ArticleText4>Article &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                    </Article>

                </ArticlesColumn1>


                <ArticlesColumn2>
                    <Article>
                        <ArticleText1>Frontstack io Lagos</ArticleText1>
                        <ArticleText2>Lagos -- Nigeria <br /> March 25, 2019</ArticleText2>
                        <ArticleText3>Angular vs React? <br /> Make your choice</ArticleText3>
                        <ArticleText4>Slides &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                        <ArticleText4>&nbsp; Video &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                    </Article>

                    <Article>
                        <ArticleText1>Frontstack io Lagos</ArticleText1>
                        <ArticleText2>Lagos -- Nigeria <br /> March 25, 2019</ArticleText2>
                        <ArticleText3>The Future of JAMSTACK  <br /> In Africa</ArticleText3>
                        <ArticleText4>Slides &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                    </Article>

                    <Article>
                        <ArticleText1>Frontstack io Lagos</ArticleText1>
                        <ArticleText2>Lagos -- Nigeria <br /> March 25, 2019</ArticleText2>
                        <ArticleText3>Angular vs React? <br /> Make your choice</ArticleText3>
                        <ArticleText4>Article &nbsp; </ArticleText4><ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                    </Article>

                </ArticlesColumn2>
                <Social>
                    <i class="fa">&#xf099;</i>&nbsp;&nbsp; Twitter &nbsp; <ExternalLink><i class="fa fa-external-link"></i></ExternalLink> &nbsp;&nbsp;   <i class="fa">&#xf09b;</i> &nbsp;&nbsp; Github &nbsp; <ExternalLink><i class="fa fa-external-link"></i></ExternalLink>
                </Social>
           </BodyLeft>

           <BodyRight>
                <Category2>Talks</Category2>
                <TalkRow>
                    <PlayIcon><i class="fa">&#xf144;</i></PlayIcon>
                    <Talk>
                        <Topic>The JavaScript Way <br /></Topic>
                        <Origin>Originally posted on dev.to <br /></Origin>
                        <Date>JUNE 18, 2018</Date>
                    </Talk>
                </TalkRow>

                <TalkRow>
                    <PlayIcon><i class="fa">&#xf144;</i></PlayIcon>
                    <Talk>
                        <Topic>The JavaScript Way <br /></Topic>
                        <Origin>Originally posted on dev.to <br /></Origin>
                        <Date>JUNE 18, 2018</Date>
                    </Talk>
                </TalkRow>

                <TalkRow>
                    <PlayIcon><i class="fa">&#xf144;</i></PlayIcon>
                    <Talk>
                        <Topic>The JavaScript Way <br /></Topic>
                        <Origin>Originally posted on dev.to <br /></Origin>
                        <Date>JUNE 18, 2018</Date>
                    </Talk>
                </TalkRow>

                <TalkRow>
                    <PlayIcon><i class="fa">&#xf028;</i></PlayIcon>
                    <Talk>
                        <Topic>The JavaScript Way <br /></Topic>
                        <Origin>Originally posted on dev.to <br /></Origin>
                        <Date>JUNE 18, 2018</Date>
                    </Talk>
                </TalkRow>

                <TalkRow>
                    <PlayIcon><i class="fa">&#xf08d;</i></PlayIcon>
                    <Talk>
                        <Topic>The JavaScript Way <br /></Topic>
                        <Origin>Originally posted on dev.to <br /></Origin>
                        <Date>JUNE 18, 2018</Date>
                    </Talk>
                </TalkRow>
                
           </BodyRight>
        </BodyWrap>    
    );
}
 
export default Body;     