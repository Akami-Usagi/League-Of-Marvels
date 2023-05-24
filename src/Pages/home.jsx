import React from "react";
import styled from "styled-components"

const MainDiv = styled.div`
    width: 100%;
`
const BackDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: url("/img/content_back.jpg") no-repeat;
    background-size: cover;
    @media (max-width: 1330px){
        height: 175vh;
        background-size: auto 100%;
    }
    @media (max-width: 790px){
        height: 257vh;
    }
    @media (max-width: 520px){
        height: 370vh;
    }
`

export default function Home(){
    return(
        <MainDiv>
            <BackDiv></BackDiv>
            
        </MainDiv>
    )
}