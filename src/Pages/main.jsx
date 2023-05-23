import React from "react";
import styled from "styled-components"
import CharacterList from "../Components/characterList";
import Banner from "../Components/banner";

const BackDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: url("/img/content_back.jpg");
`

export default function Main(){
    return(
        <div>
            <BackDiv></BackDiv>
            <Banner/>
            <CharacterList/>
        </div>
        
    )
}