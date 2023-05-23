import React from "react";
import styled from "styled-components"

const MainHeader = styled.header`
    width: 100%;
    height: 116px;
    background-color: black;
    display: flex;
    color: white;
    border-bottom: 1px solid #99905b;
    
`
const LogoHeader = styled.img`
    width: 150px;
    margin-left: 50px;
`
const MenuDiv = styled.div`
    display: flex;
    margin-left: 50px;

`
const MenuContainer = styled.div`
    position: relative;
    top: 0;
    height: 116px;
    width: 114px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#000000 70%, #444444);
`
const MenuContainerHome = styled.div`
    position: relative;
    top: 0;
    height: 116px;
    width: 114px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
    color: #99905b;
    font-family: LeagueFont;
`
const MenuTextHome = styled.h3`
    font-size: 16px;
    position: relative;
    top: 40px;
    color: white;
    font-family: LeagueFont;
`

export default function Header(){
    return(
       <MainHeader>
        <LogoHeader src="/img/marvel_logo.svg" alt="Logo Marvel" />
        <MenuDiv>            
                <MenuContainerHome>
                    <MenuTextHome>HOME</MenuTextHome>
                </MenuContainerHome>
                <MenuContainer>
                    <MenuImage src="/img/header_marker.svg" alt="HeaderMarker" />
                    <MenuText>PERSONAJES</MenuText>
                </MenuContainer>
        </MenuDiv>
        <div>
           
        </div>
       </MainHeader>
    )
}