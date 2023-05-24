import React from "react";
import styled from "styled-components"
import ProgressBar from "./progressBar";

const BannerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
    
`
const ProgressDiv = styled.div`
    width: 510px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: LeagueFont;
    font-weight: 500;
    font-size: 20px;
    
`
const ProgressText = styled.p`
    color: white;
`
const VideoDiv = styled.div`
    width: 382px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
`
const ImageDiv = styled.div`
    width: 382px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
`
const ImageFile = styled.img`
    width: 382px;
    height: 193px;
`

export default function Banner({seriesGoal}){
    return(
        <BannerDiv>
            <ProgressDiv>
                <ProgressText>PROGRESO DE SERIES PRODUCIDAS</ProgressText>
                <ProgressBar seriesGoal={seriesGoal}/>
            </ProgressDiv>
            <VideoDiv>
            <iframe width="382" height="193" src="https://www.youtube.com/embed/c3y7UTfvzX0?autoplay=1&mute=1&loop=1&playlist=c3y7UTfvzX0" title="YouTube video player" frameborder="0" ></iframe>
            </VideoDiv>
            <ImageDiv>
                <ImageFile src="https://mcdn.wallpapersafari.com/medium/30/87/bKOQC3.jpg" alt="Marvel Wallpaper" />
            </ImageDiv>
        </BannerDiv>
    )
}