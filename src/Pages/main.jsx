import React from "react";
import styled from "styled-components"
import CharacterList from "../Components/characterList";
import Banner from "../Components/banner";

const MainDiv = styled.div`
    width: 100%;
    z-index: -2;
`
const BackDiv = styled.div`
    width: 1920px;
    height: 100%;
    background: linear-gradient(black 2%, transparent), url("/img/content_back.jpg") no-repeat center fixed;
    background-size: cover;
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

export default function Main({seriesGoal, openModal, setModalData}){ //se envian los datos de la meta de series al banner y las funciones para abrir el modal y actualizar sus datos
    return(
        <MainDiv>
            <BackDiv></BackDiv>
            <ContentDiv>
                <Banner seriesGoal={seriesGoal}/>
                <CharacterList openModal={openModal} setModalData={setModalData}/>
            </ContentDiv>
        </MainDiv>
        
    )
}