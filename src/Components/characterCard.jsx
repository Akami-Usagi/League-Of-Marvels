import React from "react";
import styled from "styled-components"

const CardBody = styled.div`
    width: 248px;
    height: 448px;
    border: 1pt solid gray;
    border-radius: 8px;
    background: url("/img/card_back.jpg");
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const CardTitle = styled.div`
    display: flex;
    align-items: first baseline;
    color: white;
    font-family: LeagueFont;
    text-align: center;
    column-gap: 8px;
    margin-top: 20px;
`
const CardTitleImg = styled.img`
    width: 28px;
`
const CardImageDiv = styled.div`
    position: absolute;
    bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardImageBack = styled.img`
    width: 170px;
    transition: 1s ease-in-out;
    z-index: 2;
    &:hover{
        transform: rotate(360deg);
    }
`
const CardInfo = styled.div`
    width: 178px;
    height: 49px;
    border: 1px solid gray;
    display: flex;
    color:  white;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    font-family: LeagueFont;
    margin-top: 25px;
    background-color: #1E2328;
`
const CardAvatar = styled.img`
    position: relative;
    top: -170px;
    width: 140px;
    height: 140px;
    border-radius: 100%;
`
const CardInfoDiv = styled.div`
    position: absolute;
    bottom: 80px;
`

export default function CharacterCard({nombre, imagen, comics, series}){
    return(
        <CardBody>
            <CardTitle>
                <CardTitleImg src="/img/lname_vector.svg" alt="lname" />
                <p>{nombre}</p>
                <CardTitleImg src="/img/rname_vector.svg" alt="rname" />
            </CardTitle>
            <CardImageDiv>
                <CardImageBack src="/img/rotate_back.png" alt="Round" />
                <CardAvatar src={imagen} alt="Character Avatar"/>
            </CardImageDiv>
            <CardInfoDiv>
                <CardInfo>
                    <h4>Comics:</h4>
                    <h1>{comics}</h1>
                </CardInfo>
                <CardInfo>
                    <h4>Series:</h4>
                    <h1>{series}</h1>
                </CardInfo>
            </CardInfoDiv>
        </CardBody>
    )
}