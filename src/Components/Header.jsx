import React from "react";
import styled from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Header(){

    const [homeSelected, setHomeSelected] = useState(false) // verifica si la pestaña Home está seleccionada
    const [characterSelected, setCharacterSelected] = useState(true) //verifica si la pestaña Personajes está seleccionada

    const MainHeader = styled.header`
        width: 100%;
        height: 116px;
        background-color: black;
        display: flex;
        color: white;
        border-bottom: 1px solid #99905b;
        @media(max-width: 500px){
            justify-content: center;
        }
        
    `
    const LogoHeader = styled.img`
        width: 150px;
        margin-left: 50px;
        @media (max-width: 500px){
            margin: initial;
        }
        @media (max-width: 383px){
            display: none;
        }
    `
    const MenuDiv = styled.div`
        display: flex;
        margin-left: 50px;
        @media (max-width: 500px){
            margin: initial;
        }

    `
    const MenuContainer = styled.div`
        position: relative;
        top: 0;
        height: 116px;
        width: 114px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${characterSelected ? "linear-gradient(#000000 60%, #46381c)" : "none"};
        cursor: pointer;
    `
    const MenuContainerHome = styled.div`
        position: relative;
        top: 0;
        height: 116px;
        width: 114px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${homeSelected ? "linear-gradient(#000000 60%, #46381c)" : "none"};
        cursor: pointer;
    `
    const MenuImage = styled.img`
        width: 40px;
        position: absolute;
        top: -5px;
        
    `
    const MenuText = styled.h3`
        font-size: 16px;
        position: relative;
        top: 40px;
        color: ${characterSelected  ? "#C89B3C" : "white"};
        font-family: LeagueFont;
    `
    const MenuTextHome = styled.h3`
        font-size: 16px;
        position: relative;
        top: 40px;
        color: ${homeSelected ? "#C89B3C" : "white"};
        font-family: LeagueFont;
    `
    const LinkTo = styled(Link)`
        text-decoration: none;
    `

    return(
       <MainHeader>
        <LogoHeader src="/img/marvel_logo.svg" alt="Logo Marvel" />
        <MenuDiv>
            <LinkTo to={"/home"}>     
                <MenuContainerHome onClick={() => {
                    // al clickear en home, se activa la pestaña con sus decoradores y se desactiva la de personajes
                    setHomeSelected(true);
                    setCharacterSelected(false);
                }}>
                    {homeSelected ? <MenuImage src="/img/header_marker.svg" alt="HeaderMarker" /> : <></>} 
                    <MenuTextHome>HOME</MenuTextHome>
                </MenuContainerHome>
            </LinkTo>     
            <LinkTo to={"/"} style={{textDecoration: "none"}}>
                <MenuContainer onClick={() => {
                    // al clickear en Personajes, se activa la pestaña con sus decoradores y se desactiva la de home
                    setCharacterSelected(true);
                    setHomeSelected(false);
                }}>
                    {characterSelected ? <MenuImage src="/img/header_marker.svg" alt="HeaderMarker" /> : <></>}
                    <MenuText>PERSONAJES</MenuText>
                </MenuContainer>
            </LinkTo>      
        </MenuDiv>
        <div>
           
        </div>
       </MainHeader>
    )
}