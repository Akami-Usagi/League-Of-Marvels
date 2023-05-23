import React from "react";
import styled from "styled-components"
import CharacterList from "../Components/characterList";
import Banner from "../Components/banner";

const MainDiv = styled.div`
    
`

const BackDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: url("/img/content_back.jpg");
`
const ContentDiv = styled.div`
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
`

export default function Main(){
    return(
        <MainDiv>
            <BackDiv></BackDiv>
            <ContentDiv>
                <Banner/>
                <CharacterList/>
            </ContentDiv>
        </MainDiv>
        
    )
}